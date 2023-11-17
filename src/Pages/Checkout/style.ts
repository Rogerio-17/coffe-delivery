import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    font-family: "Baloo 2", "sans-serif";
    color: ${(props) => props.theme["base-title-900"]};
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card-200"]};
  border-radius: 6px;
  padding: 2.5rem;
`;
