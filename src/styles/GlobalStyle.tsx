import reset from 'styled-reset';
import variables from './variables';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${variables}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--light-pink);
    background-image: url('https://velog.velcdn.com/images/youa7878/post/59da6e5f-c4c2-4a52-a347-468b019f9a4b/image.png');
    background-repeat : repeat;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
  }
  
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
