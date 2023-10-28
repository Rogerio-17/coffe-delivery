import styled from "styled-components";

export const AllCoffes = styled.main`

h2 {
    margin-top: 5rem;
    margin-bottom: 4.5rem;
    font-size: 2rem;
}
`

export const ContainerCoffe = styled.div`
width: 16rem;
height: 19.375rem;
background: ${props => props.theme["base-card-200"]};
display: flex;
justify-content: center;
align-items: start;
border-radius: 6px 36px ;

img {
    width: 7.5rem;
    margin-top: -2.5rem;
}


`