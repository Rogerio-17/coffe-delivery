import { Trash } from "phosphor-react";
import { CountCoffe } from "../../../../components/CountCoffe";
import { CoffesSelectedContainer, Information } from "./style";

export function CoffesSelecteds() {
    return(
        <CoffesSelectedContainer>
            <img src={`/coffes/americano.png`}/>
            <Information>
              <p>Expresso Americano</p>
              <div className="buttons">
                <CountCoffe></CountCoffe>
                <button className="remove"><Trash/> Remover</button>
              </div>
            </Information>
            <span>R$ 9,90</span>
        </CoffesSelectedContainer>
    )
}