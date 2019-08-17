import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    margin: 0 auto;
    max-width: 480px;
    padding: 0 20px;
  }
`

export default function Legal() {
  return (
    <>
      <Head>
        <title>PaketGesucht.de</title>
      </Head>
      <GlobalStyle />
      <h1>PaketGesucht.de</h1>
      <h2>Thank you very much for your interest in PaketGesucht.de.</h2>
      <p>
        <em>
          The PaketGesucht.de app and service was an experiment that we
          conducted from November 2018 until June 2019.
        </em>{' '}
        <strong>The project is now discontinued.</strong>
      </p>
      <p>
        As you are currently on this page we are assuming that you were a part
        of this experiment in one way or the other – thank you for that.
      </p>
      <p>
        <strong>We really appreciate your contributions.</strong>
      </p>
      <p>
        Do you have any further questions? Do not hestitate to reach out:{' '}
        <a href="mailto:hi@paketgesucht.de">hi@paketgesucht.de</a>
      </p>
      <p>
        Thank you,
        <br /> <a href="https://dtg.sexy">David</a> &amp;{' '}
        <Link prefetch href="/">
          <a>Stephan</a>
        </Link>
      </p>
    </>
  )
}
