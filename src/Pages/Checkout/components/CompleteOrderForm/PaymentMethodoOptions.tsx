import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./style";

export function PaymentMethodOptions() {
    return(
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput icon={<CreditCard size={16}/>} content="Cartão de crédito"/>
            <PaymentMethodInput icon={<Bank size={16}/>} content="Cartão de débito"/>
            <PaymentMethodInput icon={<Money size={16}/>} content="Dinheiro"/>
        </PaymentMethodOptionsContainer>
    )
}