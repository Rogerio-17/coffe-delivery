import styled from "styled-components";

export const AddressFormContent = styled.form`
  margin-top: 2rem;
  input {
    background: ${(props) => props.theme["base-button-400"]};
    margin: 0.3rem 0rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
  }

  .n1 {
    display: grid;
    grid-template-columns: 12.2rem 2fr;
  }

  .n2 {
    display: grid;
    grid-template-columns: 12.2rem 2fr;
    gap: 0.5rem;
  }

  .n3 {
    display: grid;
    grid-template-columns: 12.2rem 4fr 1fr;
    gap: 0.5rem;
  }
`;
