import styled from "styled-components";

export const SuccessContainer = styled.main`
  margin-top: 10rem;
  display: flex;
  gap: 10rem;
`;

export const OrderDetailsContainer = styled.div`
  width: 32.5rem;

  h3 {
    font-family: "Baloo 2", "sans-serif";
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark-800"]};
  }
`;

export const OrderDetails = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme["yellow-dark-800"]};
  border-radius: 6px 30px;
  margin-top: 2.5rem;

  .content {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    gap: 1rem;

    div {

      span {
        font-weight: bold;
      }

      p {
        width: 100%;
        margin: 0px;
      }
      
    }
  }

  p {
    width: 100%;
    width: 2.8rem;
    gap: 1rem;
  }
`;
