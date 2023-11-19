import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
* {
    border: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.background};
    color: ${props => props.theme['base-text-700']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

 ::-webkit-scrollbar {
    width: 0.4rem;
}

::-webkit-scrollbar-track {
    background: ${({theme}) => theme['base-button-400']};
}

::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({theme}) => theme['purple-500']};
}

`