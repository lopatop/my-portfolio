import {createGlobalStyle} from 'styled-components';
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        
    }
    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    input,
    textarea,
    select {
        background: none;
        border: none;
        outline: none;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        line-height: 1.2;
    }
    
`