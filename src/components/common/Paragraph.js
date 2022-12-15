import styled from "styled-components";

const Paragraph = styled.p`
  color: #f7f7f7;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-top: -20px;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;

  .para-inner-text {
    background: #bbe903;
    color: #1e1e1e;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 412px) {
    font-size: 1.3rem;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;
export { Paragraph };
