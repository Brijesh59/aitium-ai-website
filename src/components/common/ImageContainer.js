import styled from 'styled-components'

const ImageContainer = styled.div`
  max-width: 50%;
  flex-grow: 1;
  @media(max-width: 999px){
    display: none;
  }
  @media(max-width: 1200px){
    margin-top: 10%;
  }
`
export { ImageContainer }