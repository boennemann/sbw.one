import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  /* latin-ext */
  @font-face {
    font-display: fallback;
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Mono Regular'), local('FiraMono-Regular'), url(https://fonts.gstatic.com/s/firamono/v8/N0bX2SlFPv1weGeLZDtgKP7Ss9XZYalI.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-display: fallback;
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Mono Regular'), local('FiraMono-Regular'), url(https://fonts.gstatic.com/s/firamono/v8/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

	html, body, #__next {
		height: 100%;
		width: 100%;
	}

  html {
    background-color: ${({theme}) => theme.bg};
  }

  body {
    margin: 0;
    color: ${({theme}) => theme.color};
    font-family: Fira Mono, monospace;
  }

  #__next {
    position: relative;
  }

  h1 {
    margin: 0;
    font-size: 3em;
  }

  p {
    margin-bottom: 0;
  }

  h1, span {
    display: inline-block;
		background-color: ${({theme}) => theme.bg};
    padding: 0 2px;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5em;
    }
    h1, span {
      padding: 4px;
    }
  }
`
