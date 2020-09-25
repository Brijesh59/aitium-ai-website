import styled from 'styled-components'
import backgroundSvg from "../../assets/background.svg";

const AppContainer = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundSvg});
  background-size: cover;
  @media(max-width: 412px){
    margin-left: -1px;  
  }
`
export { AppContainer }