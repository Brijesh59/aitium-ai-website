import React from "react";
import Home from './Home';

import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  &::selection{
    background: #56BBC1
  }
`

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}
