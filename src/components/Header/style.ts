import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1440px;
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transition: box-shadow 0.3s;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.01);
  background: ${props => props.theme.background};

  span {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: ${props => props.theme["yellow-dark-800"]};
    color: ${props => props.theme["white"]};
    border-radius: 50%;

    margin-top: -1.25rem;
    margin-left: 1.9rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 6.5rem;
  }

  div {
    display: flex;
    gap: 0.7rem;
  }

  button {
    background: ${props => props.theme["yellow-light-200"]};
    padding: 0 0.8rem;
    border-radius: 8px;
    cursor: pointer;
  }

  a {
    color: ${props => props.theme["yellow-dark-800"]};
  }
`;

export const Address = styled.div`
 
    background: ${props => props.theme["purple-light-200"]};
    display: flex;
    align-items: center;
    padding: 0.6rem 0.5rem;
    border-radius: 8px;
    color: ${props => props.theme["purple-500"]};
    font-weight: 700;
    font-size: 1.1rem;
  
`