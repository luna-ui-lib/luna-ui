/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: #333333;
    font-size: 14px;
    font-family: Helvetica;
  }

  h1 {
    font-size: 34px;
    font-weight: bold;
    padding-bottom: 15px;
  }

  h2 {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 15px;
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
  }

  p {
    padding-bottom: 15px;
  }

  a {
    padding-bottom: 5px;
    display: inline-block;
  }

  strong {
    font-weight: bold;
  }

  label {
    padding: 0px 6px;
  }
`;