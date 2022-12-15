import styled from "styled-components";

const TextArea = styled.textarea`
  width: 94%;
  padding: 10px 3%;
  border: 1px solid #dce1e1;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 300;
  border-radius: 2px;
  transition: 0.3s linear all;
  margin-bottom: 8px;
  &:focus {
    transition: 0.3s linear all;
    border: 1px solid #bbe903;
    box-shadow: rgba(187, 233, 3, 0.25) 0px 0px 0px 0.1rem;
  }
  @media (max-width: 768px) {
  }
`;
export { TextArea };
