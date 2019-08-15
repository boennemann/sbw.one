import Head from 'next/head'
// import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'

import FadeIn from '../components/FadeIn'
import HomeGlobalStyle from '../components/HomeGlobalStyle'
import Photo from '../components/Photo'
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

function getColors(hue) {
  return {
    primary: `hsl(${hue}, 55%, 70%)`,
    primaryDark: `hsl(${hue}, 60%, 60%)`,
  }
}

export default function Home() {
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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Mono"
          />
        </Head>

        <Photo />

        <FadeIn />

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
                and <a href="https://www.linkedin.com/in/boennemann/">more</a>.
              </span>
            </p>
          </section>

          <section>
            <p>
              <span>I live in Berlin –</span>
              <br />
              <span>
                last seen in{' '}
                <a
                  id="location"
                  href="https://maps.google.com/?q=52.48688055342877,13.318214828154577">
                  Berlin, Germany
                </a>
                .
              </span>
              <br />
              <span>
                Find my <a href="https://medium.com/@boennemann">blog</a>,{' '}
                <a href="https://github.com/boennemann">code</a>,{' '}
              </span>
              <br />
              <span>
                <a href="https://twitter.com/boennemann">tweets</a> and{' '}
                <a href="https://instagram.com/boennemann">photos</a> online.{' '}
                <a href="/legal/">Legal</a>.
              </span>
            </p>
          </section>
        </Content>
      </>
    </ThemeProvider>
  )
}
