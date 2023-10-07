import styled from 'styled-components'

export const MainLayout = styled.main`
  margin: 0 auto;
  height: 100vh;
  padding: 15px;
  text-align: center;
  max-width: 1120px;
`

export const Title1 = styled.h1`
  width: 100%;
  font-size: 48px;
  color: #00085e;
  font-family: "Al Tarikh", serif;
`

export const TimerSection = styled.section`
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
`

export const TimerParts = styled.div`
  width: 50px;
  padding: 2rem;
  background: #080062;
  color: white;
  border-radius: 15px;
`

export const TimerDivider = styled.span`
  font-size: 32px;
  margin: 1rem auto;
  color: blue;
`

export const TimerFooter = styled.footer`
  display: flex;
  max-width: 200px;
  margin: 1rem auto;
  justify-content: space-around;
`

export const CountdownInput = styled.input`
  min-width: 100px;
  background: transparent;
  border-color: transparent;
  border-bottom: 1px solid gray;
  padding: 5px;
  margin-left: 10px;
  
  font-size: 14px;
  line-height: 12px;
  
  :focus {
    border-bottom: 1px solid blue;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
`

export const CountdownInputLabel = styled.label`
  color: gray;
`;

export const CountdownLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-direction: column;
`

export const BasicWrap = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  margin: 1rem;
`

export const SButton = styled.button`
  width: 100px;
  box-sizing: border-box;
  padding: 15px;
  color: white;
  background: #000;
`