import styled, {css} from 'styled-components'

const Button = styled.button`
  min-width: 120px;
  background: ${p => p.outlined ? 'transparent' : '#2FBAC0'};
  color: ${p=>p.color ? p.color : 'white'};
  border: 2px solid #2FBAC0; 
  outline: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  margin-right: 20px;
  &:hover{
    transition: 0.3s linear;
    color: white;
    background: ${p=>p.outlined ? '#2FBAC0' : '#53A7AE'};
    cursor: pointer;
  };
  ${p=>p.disabled &&
  css`
    background-color: #C3C7C7;
    border: 2px solid #C3C7C7; 
    color: #191A1A;
    &:hover{
      color: #191A1A;
      background-color: #C3C7C7;
      cursor: progress;
    };
  `};
  @media(max-width: 768px){
    /* color: green; */
    font-size: 14px;
    padding: 10px 15px;
    margin-right: 15px;
  }
`
export { Button }