import styled from "styled-components";

const Heading = styled.h1`
  background: linear-gradient(to right, #f7f7f7, #8c8c8c, #f7f7f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: black;
  font-size: 5rem;
  letter-spacing: 3px;
  line-height: 1.2;

  .inner-text {
    background: #bbe903;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 412px) {
    font-size: 2.3rem;
  }
`;

export { Heading };
