import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./style";
import { useFormContext } from "react-hook-form";


export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },

  debit: {
    label: "Cartão de Debito",
    icon: <Bank size={16} />,
  },

  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
    const { register, formState: {errors} } = useFormContext()

    console.log(errors)

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentMethodOptionsContainer>
  );
}
