import styled from "styled-components";

export const ButtonContainer = styled.button`
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow-500"]};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      background: ${(props) => props.theme["yellow-dark-800"]};
    }

    &:disabled{
      opacity: 0.7;
      cursor: not-allowed;

      &:hover {
        background: ${(props) => props.theme["yellow-500"]};
      }
    }
`