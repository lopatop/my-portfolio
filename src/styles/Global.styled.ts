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
        cursor: pointer;
        &:focus-visible{
            outline: 1px solid ${theme.colors.borderBlock};
        }           
    }

    button {
        border: none;
        background: none;
        &:focus-visible{
            outline: 1px solid ${theme.colors.borderBlock};
        }   
    }
    
    section{
        background-color: ${theme.colors.primaryBg};
        padding: 80px 0;
        
        @media  ${theme.media.mobile} {
            padding: 80px 0;
        }
            
        }
    

    input,
    textarea,
    select {
        &:focus-visible{
            outline: 1px solid ${theme.colors.borderBlock};
        }
        
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
        min-width: 360px;
        
    }
    
`