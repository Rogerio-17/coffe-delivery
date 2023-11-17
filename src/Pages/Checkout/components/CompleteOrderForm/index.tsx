import { CurrencyDollar, MapPinLine } from "phosphor-react"
import { SectionTitle } from "../SectionTitle"
import { FormContainer, FormSectionContainer } from "./style"
import { AddressForm } from "./AddressForm"
import { PaymentMethodOptions } from "./PaymentMethodoOptions"

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
                <AddressForm/>
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar size={22}/>}
                color="purple-dark-800"
                />
                <PaymentMethodOptions/>
            </FormSectionContainer>

        </FormContainer>
    )
}