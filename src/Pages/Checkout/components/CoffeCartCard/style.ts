import styled from "styled-components";

export const CoffeCartCardConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme["base-button-400"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  p {
    font-weight: 700;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveBotton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme["base-text-700"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme["base-button-400"]};
  border: 1px solid transparent;
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["purple-dark-800"]};
  }

  &:hover {
    background: ${({ theme }) => theme["purple-light-200"]};
    border: 1px solid ${({ theme }) => theme["purple-dark-800"]};
  }
`;
