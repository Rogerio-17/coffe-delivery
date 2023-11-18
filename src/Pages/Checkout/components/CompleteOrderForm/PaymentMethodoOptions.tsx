import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./style";
import { useFormContext } from "react-hook-form";

export const paymentMethod = {
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
    const { register } = useFormContext()
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethod).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
    </PaymentMethodOptionsContainer>
  );
}
