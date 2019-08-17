import get4sqLocation from '../../lib/get-4sq-location'

export default async function handle(req, res) {
  res.status(200)

  try {
    var location = await get4sqLocation()
  } catch {
    res.json({data: null})
    return
  }

  res.setHeader('Cache-Control', 'public, max-age=600')
  res.json({data: location})
}
