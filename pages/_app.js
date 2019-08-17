import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

const MIN_FONT_SIZE = 16
const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE_SCREEN = 480
const MAX_FONT_SIZE_SCREEN = 1200

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  body {
    font-size: calc(
      ${MIN_FONT_SIZE}px +
      (${MAX_FONT_SIZE} - ${MIN_FONT_SIZE}) *
      (100vw - ${MIN_FONT_SIZE_SCREEN}px) /
      (${MAX_FONT_SIZE_SCREEN} - ${MIN_FONT_SIZE_SCREEN})
    );
    hyphens: auto;
    hyphenate-limit-chars: 6 3 3;
    hyphenate-limit-lines: 2;
    hyphenate-limit-last: always;
    hyphenate-limit-zone: 8%;
  }

  * {
    box-sizing: border-box;
  }
`

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1" />
          <link
            rel="publisher"
            href="https://plus.google.com/+StephanBönnemann"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#ffffff"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Stephan" />
          <meta name="application-name" content="Stephan" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
