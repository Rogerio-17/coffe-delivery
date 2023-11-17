import styled from "styled-components";

export const InputStyleContainer = styled.input`
height: 2.625rem;
border-radius: 6px;
border: 1px solid ${({theme}) => theme["base-button-400"]};
background: ${({theme}) => theme["base-input-300"]};
transition: 0.4s;

&:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-color: ${({theme}) => theme["yellow-dark-800"]}
}

color: ${({theme}) => theme["base-text-700"]};
font-size: 0.75rem;
padding: 0 0.75rem;

&::placeholder{
    color: ${({theme}) => theme["base-label-600"]}
}
`