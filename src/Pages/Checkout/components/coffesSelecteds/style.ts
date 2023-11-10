import styled from "styled-components";

export const CoffesSelectedContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  gap: 2rem;
  font-size: 1rem;
  border-bottom: 2px solid ${(props) => props.theme["base-button-400"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
  }
`;

export const Information = styled.div`
  .buttons {
    display: flex;
    margin-top: 0.5rem;
    gap: 0.5rem;
    margin-right: 4rem;

    .remove {
      background: ${(props) => props.theme["base-button-400"]};
      padding: 0rem 0.6rem;
      text-align: center;
      display: flex;
      align-items: center;
      gap: 0.1rem;
      border-radius: 8px;
      border: 1px solid transparent;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme["purple-dark-800"]};
      }

      &:hover {
        transition: 0.4s;
        background: ${(props) => props.theme["purple-light-200"]};
        border: 1px solid ${(props) => props.theme["purple-dark-800"]};
      }
    }
  }
`;
