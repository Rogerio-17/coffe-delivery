import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {
  CheckoutContainer,
  FormAddress,
  FormAddressAndPayment,
  FormPayment,
  InformationPrices,
  SelectedProducts,
  SelectedProductsContainer,
} from "./style";
import { HeaderForms } from "./components/headerForms";
import { CoffesSelecteds } from "./components/coffesSelecteds";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";

export function Checkout() {
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

  const isHabilityButton = cartItems.length === 0

  return (
    <CheckoutContainer>
      <FormAddressAndPayment>
        <h4>Complete seu pedido</h4>

        <FormAddress>
            <HeaderForms 
            color="yellow-dark-800"
            icon={<MapPinLine size={24}/>}
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            />
          <form action="">
            <div className="n1">
              <input type="number" placeholder="CEP" />
            </div>

            <input type="text" placeholder="Rua" />

            <div className="n2">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div className="n3">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </FormAddress>

        <FormPayment>
        <HeaderForms 
            color="purple-dark-800"
            icon={<CurrencyDollar size={24}/>}
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
            <div className="teste">
             <button> <span><CreditCard size={16}/></span> Cartão de crédito</button>
             <button> <span><Bank size={16}/></span> Cartão de débito</button>
             <button> <span><Money size={16}/></span> Dinheiro</button>
            </div>
        </FormPayment>
      </FormAddressAndPayment>

      <SelectedProductsContainer>
      <h4>Cafés selecionados</h4>
      <SelectedProducts>
        {
          cartItems.map((coffe) => {
            return(
              <CoffesSelecteds coffe={coffe}></CoffesSelecteds>
            )
          })
        }

        <InformationPrices>
        <div>
        <span>Total de itens</span>
        <span>Frete</span>
        <p>Total</p>
        </div>

        <div>
        <span>R$ {totalPriceCoffes}</span>
        <span>R$ {totalPrices ? freightFormated : "0,00"}</span>
        <p>R$ {totalPricesOfTheOrder}</p>
        </div>
        </InformationPrices>

        <button disabled={isHabilityButton} className="confirmpayment">Confirma Pedido</button>
      </SelectedProducts>
      </SelectedProductsContainer>

    </CheckoutContainer>
  );
}
