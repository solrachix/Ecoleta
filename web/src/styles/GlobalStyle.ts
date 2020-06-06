 import { createGlobalStyle } from './styled-components';
//  import { lighten } from 'polished';
 
 export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5;
        -webkit-font-smoothing: antialiased;
        color: ${({ theme }) => theme.colors.text};
    }

    body, input, button, select {
        outline: none;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.colors.text};
        font-family: Ubuntu;
    }

    ::-webkit-scrollbar{
        width: 8px;
        background: ${({ theme }) => theme.colors.secundary};
    }
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 50px;
    }
`;