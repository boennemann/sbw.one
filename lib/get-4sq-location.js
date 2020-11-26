import https from 'https'
import querystring from 'querystring'

export default async function get4sqLocation() {
  const url =
    'https://api.foursquare.com/v2/users/self/checkins?' +
    querystring.stringify({
      limit: 1,
      m: 'swarm',
      v: '20170730',
      oauth_token: process.env.FOURSQUARE_OAUTH_TOKEN, // eslint-disable-line no-process-env
    })

  const res = await new Promise((resolve, reject) => {
    https.get(url, resolve).on('error', reject)
  })

  const {statusCode} = res

  if (statusCode >= 400) {
    throw new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
  }

  res.setEncoding('utf8')

  const rawData = await new Promise((resolve) => {
    let rawData = ''

    res.on('data', (chunk) => {
      rawData += chunk
    })

    res.on('end', () => {
      resolve(rawData)
    })
  })

  const data = JSON.parse(rawData)

  const {location} = data.response.checkins.items[0].venue
  return {
    city: location.city,
    country: location.country,
    lat: location.lat,
    lng: location.lng,
  }
}
