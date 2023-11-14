import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.4rem;
  gap: 2rem;

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

export const SelectedProductsContainer = styled.div``;

export const SelectedProducts = styled.div`
  background: ${(props) => props.theme["base-card-200"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 0rem 3rem;
  display: flex;
  flex-direction: column;

  .confirmpayment {
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
  }
`;

export const InformationPrices = styled.div`
display: flex;
justify-content: space-between;

div {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
`;
