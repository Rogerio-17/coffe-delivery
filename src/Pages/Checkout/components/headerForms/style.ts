import styled from "styled-components";

interface ColorProps {
    color: "yellow-dark-800" | "purple-dark-800"
}

export const HeaderForm = styled.div<ColorProps>`
    display: flex;
    gap: 0.5rem;
    color: ${props => props.theme[props.color]};

.textMapLine {
    color: ${props => props.theme["base-text-700"]};

    span {
        font-weight: bold;
    }
}
`