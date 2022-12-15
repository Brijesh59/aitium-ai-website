import styled, { css } from "styled-components";

const Button = styled.button`
  min-width: 120px;
  background: ${(p) => (p.outlined ? "transparent" : "#F7F7F7")};
  color: ${(p) => (p.outlined ? "#f7f7f7" : "#191a1a")};
  border: 2px solid #f7f7f7;
  outline: none;
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 3px;
  margin-right: 30px;
  &:hover {
    transition: 0.3s linear;
    color: #191a1a;
    background: ${(p) => (p.outlined ? "#F7F7F7" : "#F9F9F9")};
    border-color: ${(p) => (p.outlined ? "#F7F7F7" : "#F9F9F9")};
    cursor: pointer;
  }
  ${(p) =>
    p.disabled &&
    css`
      background-color: #c3c7c7;
      border: 2px solid #c3c7c7;
      color: #191a1a;
      &:hover {
        color: #191a1a;
        background-color: #c3c7c7;
        cursor: progress;
      }
    `};
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
    margin-right: 15px;
  }
`;
export { Button };
