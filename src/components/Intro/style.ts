import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 1fr 1fr;
  margin-top: 8rem;
  gap: 5rem;
`;

export const IntroInformacoesDoServico = styled.div`
  margin-top: 1rem;

  h1 {
    font-size: 3rem;
    font-family: "Baloo 2", "sans-serif";
    line-height: 4.2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-title-900"]};
  }

  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme["base-subtitle-800"]};
    margin-bottom: 3.125rem;
  }
`;



export const IntroDestaques = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
 

  p {
    font-size: 1rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }


`;

interface ColorsIcons {
    cor: "yellow-dark-800" | "yellow-500" | "base-text-700" | "purple-500"
}

export const IntroDestaquesIncons = styled.span<ColorsIcons>`
    background: ${props => props.theme[props.cor]};
    display: flex;
    color: ${props => props.theme.white};
    align-items: center;
    padding: 0.6rem;
    border-radius: 50%;
    margin-top: -0.2rem;
`