import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'
// import styled from 'styled-components'

import Photo from '../components/Photo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Photo />
    </>
  )
}
