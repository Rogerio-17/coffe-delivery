import { ContainerCoffe, FooterCard, TagContainer } from "./style";
import  coffe1  from '../../../../assets/CoffeOne.svg';



export function CoffeWithDetails() {
    return(
        <ContainerCoffe>
            <img src={coffe1} />
            <TagContainer>
            <span>Tradicional</span>
            <span>Com leite</span>
            </TagContainer>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <FooterCard>
                <div>
                    <span>R$</span>
                    <p>9,90</p>
                </div>
            </FooterCard>
        </ContainerCoffe>
        
    )
}