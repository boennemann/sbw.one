import {createGlobalStyle} from 'styled-components'

const MIN_FONT_SIZE = 16
const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE_SCREEN = 480
const MAX_FONT_SIZE_SCREEN = 1200

export default createGlobalStyle`
	html {
		background-color: ${({theme}) => theme.primary};
	}

	body {
		color: white;
		font-family: Fira Mono, monospace;
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

	#__next {
    min-height: 100vh;
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
		background-color: #020202;
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
