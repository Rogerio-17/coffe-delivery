import { PaymentMethodContainer } from "./stely";
import { ReactNode } from "react";

interface PaymentMethodInputProps {
    icon: ReactNode,
    content: string
}


export function PaymentMethodInput({icon, content}: PaymentMethodInputProps) {
    return(
        <PaymentMethodContainer>
          {icon}
          {content}
        </PaymentMethodContainer>
    )
}