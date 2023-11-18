import styled, { css } from "styled-components";

export const InputWarpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme["error"]};
    font-size: 0.7rem;
  }
`;

interface InputStyleContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme["base-button-400"]};
  background: ${({ theme }) => theme["base-input-300"]};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border: 1px solid ${theme.error};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme["base-text-700"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme["base-label-600"]};
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border: 1px solid ${({ theme }) => theme["yellow-dark-800"]};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme["base-label-600"]};
`;
