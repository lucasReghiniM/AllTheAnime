import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
        background: var(--background);
    }
    *, button, input {
        border: 0;
        font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    html {
        background: var(--fundo);
    }
    :root {
    --white: #FFFFFF;
    --black: #43423E;
    
    --yellow: #FFE871;

    --lightBlue: #797C87;
    --hardBlue: #1E2530;

    --gray: #797C87;
    --background: #272C38;
    
  }
`;