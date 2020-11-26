import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'

import HomeGlobalStyle from '../components/HomeGlobalStyle'
import Photo from '../components/Photo'
import get4sqLocation from '../lib/get-4sq-location.js'
import NAME from '../lib/name'

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  a {
    color: ${({theme}) => theme.primary};
    text-decoration: none;
    font-weight: bold;
  }

  a:hover,
  a:focus {
    color: ${({theme}) => theme.primaryDark};
  }
`

const Section = styled.section`
  position: fixed;
  ${({top}) => (top ? 'top: 0' : '')};
  ${({bottom}) => (bottom ? 'bottom: 0' : '')};

  h1,
  span {
    padding-left: env(safe-area-inset-left);
  }

  span:last-of-type {
    padding-bottom: ${({bottom}) =>
      bottom ? 'env(safe-area-inset-bottom)' : ''};
  }
`

function getColors(hue) {
  return {
    bg: '#020202',
    color: 'white',
    primary: `hsl(${hue}, 55%, 70%)`,
    primaryDark: `hsl(${hue}, 60%, 60%)`,
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
}

Home.getInitialProps = async function ({req}) {
  if (req) {
    let location
    try {
      location = await get4sqLocation()
    } catch {}
    return {location} || {location: null}
  }

  const res = await global.fetch('/api/location')
  const {data} = await res.json()

  return {location: data}
}

export default function Home({location}) {
  const [dynamicTheme, setTheme] = useState(getColors(0))

  useEffect(() => {
    const hue = Math.floor(Math.random() * 360)

    setTheme(getColors(hue))
  }, [])

  return (
    <ThemeProvider theme={dynamicTheme}>
      <>
        <HomeGlobalStyle />

        <Head>
          <title>{NAME}</title>
          <meta name="description" content={NAME} />
          <meta
            id="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
          />
        </Head>

        <Photo />

        <Content>
          <Section top>
            <h1>{NAME}</h1>
            <p>
              <br />
              <span>
                I am Managing Director, Engineering for{' '}
                <a title="Prosperity" href="https://prosperity.berlin/">
                  Prosperity
                </a>
                ,
              </span>
              <br />
              <span>a former Freelancer, Speaker, Founder</span>
              <br />
              <span>
                and{' '}
                <a
                  href="https://www.linkedin.com/in/boennemann/"
                  title="LinkedIn"
                >
                  more
                </a>
                .
              </span>
            </p>
          </Section>

          <Section bottom>
            <p>
              <span>I live in Berlin –</span>
              <br />
              {!!location && (
                <>
                  <span>
                    last seen in{' '}
                    <a
                      href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                    >
                      {(location.city ? location.city + ', ' : '') +
                        location.country}
                    </a>
                    .
                  </span>
                  <br />
                </>
              )}
              <span>
                Find my{' '}
                <a href="https://medium.com/@boennemann" title="Medium Blog">
                  blog
                </a>
                ,{' '}
                <a href="https://github.com/boennemann" title="GitHub">
                  code
                </a>
                ,{' '}
              </span>
              <br />
              <span>
                <a href="https://twitter.com/boennemann" title="Twitter">
                  tweets
                </a>{' '}
                and{' '}
                <a href="https://instagram.com/boennemann" title="Instagram">
                  photos
                </a>{' '}
                online.{' '}
                <Link href="/legal">
                  <a>Legal</a>
                </Link>
                .
              </span>
            </p>
          </Section>
        </Content>
      </>
    </ThemeProvider>
  )
}
