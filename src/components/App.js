import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./Home";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1A1A1A;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}
