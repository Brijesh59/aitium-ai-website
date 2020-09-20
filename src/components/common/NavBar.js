import styled from 'styled-components'

const NavBar = styled.nav`
  color:#fff;
  display: flex;
  height: 120px;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  @media(max-width: 1000px){
    height: 80px;
  }
  @media(max-width: 412px){
    font-size: 1.5em;
    height: 80px;
  }
`
export { NavBar }