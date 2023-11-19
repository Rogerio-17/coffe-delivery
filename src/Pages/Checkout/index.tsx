import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CheckoutContainer } from "./style";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money"
}



const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  rua: zod.string().min(1, "Informe sua rua"),
  numero: zod.string().min(1, "Informe o número da residência"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o UF do seu estado"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {message: "Informe o metódo de pagamento"}
    }
  })
})

export type OderData = zod.infer<typeof confirmOrderFormValidationSchema>

export type ConfirmOrderFormData = OderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { cleanCart } = useCart()

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoffes />
      </CheckoutContainer>
    </FormProvider>
  );
}
