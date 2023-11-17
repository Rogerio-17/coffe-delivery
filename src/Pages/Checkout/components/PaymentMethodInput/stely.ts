import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
padding: 0 1rem;
background: ${({theme}) => theme["base-button-400"]};
color:  ${({theme}) => theme["base-text-700"]};
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.75rem;
font-size: 0.75rem;
text-transform: uppercase;
border-radius: 6px;
height: 3rem;
border: 1px solid  ${({theme}) => theme["base-button-400"]};
cursor: pointer;
transition: 0.4s;

svg{
    color:  ${({theme}) => theme["purple-dark-800"]}
}

&:hover {
    background:  ${({theme}) => theme["purple-light-200"]};
    border: 1px solid  ${({theme}) => theme["purple-dark-800"]};
}

user-select: none;
`