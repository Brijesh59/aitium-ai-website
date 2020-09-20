import styled from 'styled-components'

const Input = styled.input`
  /* min-width: 150px; */
  width: 94%;
  padding: 14px 3%;
  border: 1px solid #DCE1E1;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  border-radius: 2px;
  transition: 0.3s linear all;
  margin-bottom: 8px;
  &:focus{
    transition: 0.3s linear all;
    border: 1px solid #6AAAB6;
    box-shadow: rgba(106, 170, 182, 0.25) 0px 0px 0px 0.1rem;
  }
  @media(max-width: 768px){
    
  }
`
export { Input }