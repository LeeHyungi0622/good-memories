import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle `
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    body{
        font-family: 'Open Sans Condensed';
        background-color: white;
    }
    *{
        box-sizing: border-box;
    }
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export default GlobalStyles;