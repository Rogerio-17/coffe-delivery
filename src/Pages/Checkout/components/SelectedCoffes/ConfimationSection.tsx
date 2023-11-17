import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./style";

export function ConfirmationSection(){
    const { cartItems } = useCart()

    const freight = cartItems.length > 0 ? 9.0 : 0.0

    const freightFormated = formatMoney(freight)
  
    const prices = cartItems.map((item) => {
      const priceTotal = item.price * item.quantity
      return priceTotal
    })

  const totalPrices = prices.reduce((a, b) => a + b, 0)
  const totalPricesOfTheOrder = totalPrices ? formatMoney(totalPrices + freight) : "0,00"
  const totalPriceCoffes = formatMoney(totalPrices)

  const isHabilityButton = cartItems.length === 0


    return(
        <ConfirmationSectionContainer>
            <div>
                <span>Total de itens</span>
                <span>R$ {totalPriceCoffes}</span>
            </div>

            <div>
                <span>Entrega</span>
                <span>R$ {freightFormated}</span>
            </div>

            <div>
                <p>Total</p>
                <p>R$ {totalPricesOfTheOrder}</p>
            </div>

            <Button text="confirmar pedido" disabled={isHabilityButton} type="submit"/>
            
        </ConfirmationSectionContainer>
    )
}