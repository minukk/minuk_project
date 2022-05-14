import emotionReact from 'emotion-reset';
import { Global, css } from '@emotion/react';

const style = css`
  ${emotionReact}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    font-family: 'Roboto', sans-serif;
    color: #222222;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
