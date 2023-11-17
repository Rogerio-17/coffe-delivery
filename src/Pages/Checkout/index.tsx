import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CheckoutContainer } from "./style";

export function Checkout() {
  /*
  import { useCart } from "../../hooks/useCart";
  import { formatMoney } from "../../utils/formatMoney";

  const { cartItems } = useCart()
  const freight = 9.0
  const freightFormated = formatMoney(freight)

  const prices = cartItems.map((item) => {
    const priceTotal = item.price * item.quantity
    return priceTotal
  })

  const totalPrices = prices.reduce((a, b) => a + b, 0)
  const totalPricesOfTheOrder = totalPrices ? formatMoney(totalPrices + freight) : "0,00"
  const totalPriceCoffes = formatMoney(totalPrices)

  const isHabilityButton = cartItems.length === 0*/

  return (
  <CheckoutContainer>
    <CompleteOrderForm/>
  </CheckoutContainer>
  )
}
