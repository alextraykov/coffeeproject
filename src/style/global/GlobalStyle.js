import { createGlobalStyle } from "styled-components";
import { cinzelDecorative } from "../../../static/fonts/CinzelDecorative-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Cinzel Decorative;
        src: url(${cinzelDecorative}) format('truetype');
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
        font-family: 'Cinzel Decorative';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
