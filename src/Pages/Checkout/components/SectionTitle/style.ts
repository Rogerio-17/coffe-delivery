import styled from "styled-components";

interface colorProps {
    color: "yellow-dark-800" | "purple-dark-800"
}

export const SectionTitleConatainer = styled.div<colorProps>`
  display: flex;
  gap: 0.5rem;
  
  h6 {
    color: ${(props) => props.theme[props.color]}
  }
`;
