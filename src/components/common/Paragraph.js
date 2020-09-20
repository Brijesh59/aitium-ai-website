import styled from 'styled-components'

const Paragraph = styled.p`
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.4;
  max-width: 90%;
  @media(max-width: 412px){
    font-size: 1.3rem;
    margin-top: 0px;
  }
`
export { Paragraph }