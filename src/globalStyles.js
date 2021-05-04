import { createGlobalStyle } from 'styled-components/macro'
import backgroundImage from '../src/images/weatherBg.jpg'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
  }

  input, button {
    outline: none;
    border: none;
    font-size: 20px;
    padding: 15px;
    border-radius: 25px;
  }

  input {
    width: 400px;
  }

  button {
    cursor: pointer;
  }

  button {
    background-color: rgb(138, 202, 108);
  }
  
  h1 {
    font-size: 70px;
    margin-bottom: 30px;
  }
`

