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
    --blue: #0174BB;
    --white: #FFFFFF;
    --black: #43423E;
    
    --green: #00A94F;
    --orange: #F6A74E;
    --red: #EC3521;

    --lightPurple: #E7E8F0;
    --mediunPurple: #696781;
    --hardPurple: #3D3C53;

    --gray: #808487;
    --background: #FCFBF6;
    --lightBlue: #F7FFFF;
    
  }
`;