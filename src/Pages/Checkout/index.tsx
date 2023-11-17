import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CheckoutContainer } from "./style";

export function Checkout() {
  return (
  <CheckoutContainer>
    <CompleteOrderForm/>
    <SelectedCoffes/>
  </CheckoutContainer>
  )
}
