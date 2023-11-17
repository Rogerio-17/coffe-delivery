import { MapPinLine } from "phosphor-react"
import { SectionTitle } from "../SectionTitle"
import { FormContainer, FormSectionContainer } from "./style"

export function CompleteOrderForm() {
    return(
        <FormContainer>
            <h2>Complete seu pedido</h2>
            <FormSectionContainer>
                <SectionTitle
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine size={22}/>}
                color="yellow-dark-800"
                />
            </FormSectionContainer>
        </FormContainer>
    )
}