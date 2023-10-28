import styled from "styled-components"

interface ColorsIcons {
    cor: "yellow-dark-800" | "yellow-500" | "base-text-700" | "purple-500"
}

export const IntroDestaquesIncons = styled.span<ColorsIcons>`
    background: ${props => props.theme[props.cor]};
    display: flex;
    color: ${props => props.theme.white};
    align-items: center;
    padding: 0.6rem;
    border-radius: 50%;
    margin-top: -0.2rem;
`