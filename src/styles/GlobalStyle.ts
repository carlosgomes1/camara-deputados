import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-size: 60%;

        background-color: #eeeeee;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    body, input, button, textarea {
        font: 500 1.6rem Poppins;
    }
`;

export default GlobalStyle;