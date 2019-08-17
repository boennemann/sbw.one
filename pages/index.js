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
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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

function getColors(hue, darkMode) {
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

Home.getInitialProps = async function({req}) {
  if (req) {
    let location
    try {
      location = await get4sqLocation()
    } catch {}
    return {location} || {location: null}
  }

  const res = await global.fetch('/api/location')
  const location = await res.json()

  return {location}
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
        </Head>

        <Photo />

        {/* <FadeIn /> */}

        <Content>
          <section>
            <h1>{NAME}</h1>
            <p>
              <br />
              <span>I am a Freelance Software Engineer –</span>
              <br />
              <span>former Engineering Manager,</span>
              <br />
              <span>former Founder</span>
              <br />
              <span>
                and{' '}
                <a
                  href="https://www.linkedin.com/in/boennemann/"
                  title="LinkedIn">
                  more
                </a>
                .
              </span>
            </p>
          </section>

          <section>
            <p>
              <span>I live in Berlin –</span>
              <br />
              {!!location && (
                <>
                  <span>
                    last seen in{' '}
                    <a
                      href={`https://maps.google.com/?q=${location.lat},${location.lng}`}>
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
                <Link prefetch href="/legal">
                  <a>Legal</a>
                </Link>
                .
              </span>
            </p>
          </section>
        </Content>
      </>
    </ThemeProvider>
  )
}
