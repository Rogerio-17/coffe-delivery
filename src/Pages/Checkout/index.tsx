import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {
  CheckoutContainer,
  FormAddress,
  FormAddressAndPayment,
  FormPayment,
  SelectedProducts,
} from "./style";
import { HeaderForms } from "./components/headerForms";

export function Checkout() {
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

      <SelectedProducts></SelectedProducts>
    </CheckoutContainer>
  );
}
