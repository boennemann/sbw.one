import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
	}
`

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, minimal-ui" />
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
