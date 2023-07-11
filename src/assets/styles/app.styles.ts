import styled, {keyframes} from 'styled-components'

export const SApp = styled.div`
  text-align: center;
`

export const SHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`

export const SLink = styled.a`
  color: #61dafb;
`


export const TimerParts = styled.div`
  max-width: 50px;
  padding: 2rem;
  background: #0b9d9d;
  color: white;
  border-radius: 15px;
`

export const TimerDivider = styled.span`
  font-size: 32px;
  margin: 1rem auto;
  color: blue;
`
