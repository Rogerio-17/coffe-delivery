import styled from "styled-components";

export const AllCoffes = styled.main`

h2 {
    margin-top: 5rem;
    margin-bottom: 4.5rem;
    font-size: 2rem;
    font-family: "Baloo 2", "sans-serif";
    color: ${props => props.theme["base-title-900"]};
}
`

export const ContainerCoffe = styled.div`
width: 16rem;
height: 19.375rem;
background: ${props => props.theme["base-card-200"]};
display: flex;
align-items: center;
flex-direction: column;
border-radius: 6px 36px ;

img {
    width: 7.5rem;
    margin-top: -2.5rem;
}


h4 {
    font-size: 1.25rem;
    font-family: "Baloo 2", "sans-serif";
}

p {
    font-size: 0.875rem;
    padding: 0.2rem 1rem;
    text-align: center;
}
`

export const TagContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
margin-top: 1rem;
margin-bottom: 1.25rem;
flex-wrap: wrap;



span{
    background:  ${props => props.theme["yellow-light-200"]};
    color:  ${props => props.theme["yellow-dark-800"]};
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.3rem;
    border-radius: 8px;
}

`

export const FooterCard = styled.footer`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

> div {
    display: flex;
    align-items: center;
    gap: 2px;

    p {
        padding: 0;
        font-size: 1.7rem;
        font-weight: 700;
        font-family: "Baloo 2", "sans-serif";
    }

    span {
        font-size: 0.75;
    }
}
`