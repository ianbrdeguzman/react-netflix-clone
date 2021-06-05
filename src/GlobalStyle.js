import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: white;
    }
    button {
        background-color: #e50914;
        border-radius: .2rem;
        border: none;
        outline: none;
        color: white;
        font-size: .9rem;
        cursor: pointer;

        @media (min-width: 600px) {
            font-size: 1rem;
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default GlobalStyle;
