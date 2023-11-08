import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.4rem;

  h4 {
    font-family: "Baloo 2", "sans-serif";
  }
`;

export const FormAddressAndPayment = styled.div``;

export const FormAddress = styled.div`
  background: ${(props) => props.theme["base-card-200"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 8px;

  form {
    margin-top: 2rem;
  }

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

export const FormPayment = styled.div`
  background: ${(props) => props.theme["base-card-200"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  .teste {
    display: flex;
    gap: 1rem;
  }

  button {
    width: 10rem;
    padding: 1rem;
    margin-top: 2rem;
    background: ${(props) => props.theme["base-button-400"]};
    text-transform: uppercase;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.2rem;
    border-radius: 6px;
    color: ${(props) => props.theme["base-text-700"]};
    border: 1px solid transparent;
    cursor: pointer;
    

    span {
      display: flex;
      color: ${(props) => props.theme["purple-dark-800"]};
    }

    &:hover {
        transition: 0.4s;
        background: ${(props) => props.theme["purple-light-200"]};
        border: 1px solid ${(props) => props.theme["purple-dark-800"]};
    }
  }
`;

export const SelectedProducts = styled.div``;
