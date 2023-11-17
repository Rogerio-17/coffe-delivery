import styled from "styled-components";
import { SectionBaseStyle } from "../../style";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h2 {
    font-family: "Baloo 2", "sans-serif";
    color: ${(props) => props.theme["base-title-900"]};
  }
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
