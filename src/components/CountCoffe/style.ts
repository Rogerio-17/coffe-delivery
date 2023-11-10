import styled from "styled-components";

export const CountCoffeContainer = styled.div`


input {
    width: 1.5rem;
    height: 2rem;
    text-align: center;
    background: ${props => props.theme["base-button-400"]};

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
}

button {
    background: ${props => props.theme["base-button-400"]};
    padding: 0.4rem 0.8rem;
    border: none;
    margin: 0px;
    cursor: pointer;
    font-weight: 700;
    color: ${props => props.theme["purple-dark-800"]};


    &:first-child {
        border-radius: 8px 0px 0px 8px;
    }

    &:last-child {
        border-radius: 0px 8px 8px 0px;
    }
}


`