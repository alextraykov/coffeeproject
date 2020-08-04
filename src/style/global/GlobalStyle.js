import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('../fonts/Inter-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Playfair Display';
        src: url('../fonts/PlayFairDisplaySC-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('../fonts/Roboto-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        font-size: 1em;
        line-height: 1;
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: 'Playfair Display';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
