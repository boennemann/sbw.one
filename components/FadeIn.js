import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #020202;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in 150ms;
  pointer-events: none;
`
