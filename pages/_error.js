import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }
`

Error.propTypes = {
  statusCode: PropTypes.number,
}

Error.getInitialProps = function({res, err}) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return {statusCode}
}

export default function Error({statusCode}) {
  return (
    <>
      <GlobalStyle />
      <h1>Error</h1>
      <Link href="/" prefetch>
        <a>Home</a>
      </Link>
      <p>
        {statusCode === 404
          ? 'The page you are looking for does not exist 👀'
          : statusCode === 500
          ? 'Something went wrong 🤔'
          : 'Something went wrong 🤦‍♂️'}
      </p>
    </>
  )
}
