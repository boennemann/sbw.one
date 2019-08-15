import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import HomeGlobalStyle from '../components/HomeGlobalStyle'
import Photo from '../components/Photo'

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

Home.getInitialProps = function() {
  const hue = Math.floor(Math.random() * 360)

  return {
    theme: {
      primary: `hsl(${hue}, 55%, 70%)`,
      primaryDark: `hsl(${hue}, 60%, 60%)`,
    },
  }
}

/* eslint-disable react/prop-types */
export default function Home({theme}) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <HomeGlobalStyle />

        <Head>
          <title>Stephan Bönnemann</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Fira+Mono"
          />
        </Head>

        <Photo />

        <Content>
          <div>
            <h1>Stephan Bönnemann</h1>
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
          </div>

          <div>
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
          </div>
        </Content>
      </>
    </ThemeProvider>
  )
}
