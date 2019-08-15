import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  color: #333;
`

const Title = styled.h1`
  margin: 0;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  text-align: center;
`

const Description = styled.p`
  text-align: center;
`

const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;

  &:hover {
    border-color: #067df7;
  }

  h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }

  p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Hero>
        <Title>Welcome to Next.js!</Title>
        <Description>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </Description>

        <Row>
          <Link href="https://github.com/zeit/next.js#getting-started">
            <Card>
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next.js on GitHub and in their examples</p>
            </Card>
          </Link>
          <Link href="https://github.com/zeit/next.js/tree/master/examples">
            <Card>
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub</p>
            </Card>
          </Link>
          <Link href="https://github.com/zeit/next.js">
            <Card>
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it!</p>
            </Card>
          </Link>
        </Row>
      </Hero>
    </div>
  )
}
