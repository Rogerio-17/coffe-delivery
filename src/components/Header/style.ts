import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  img{
    width: 6.5rem;
  }

  div {
    display: flex;
    gap: 0.7rem;
  }

  span {
    background: ${props => props.theme["purple-light-200"]};
    display: flex;
    align-items: center;
    padding: 0.6rem 0.5rem;
    border-radius: 8px;
    color: ${props => props.theme["purple-500"]};
    font-weight: 700;
    font-size: 1.1rem;
  }

  button {
    background: ${props => props.theme["yellow-light-200"]};
    padding: 0 0.8rem;
    border-radius: 8px;
    color: ${props => props.theme["yellow-dark-800"]};
    cursor: pointer;
  }
`;

