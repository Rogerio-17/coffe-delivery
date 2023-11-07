import { MapPinLine } from "phosphor-react";
import { CheckoutContainer, FormAddressAndPayment, SelectedProducts } from "./style";

export function Checkout() {
    return(
        <CheckoutContainer>
            <FormAddressAndPayment>
            <h4>Complete seu pedido</h4>
                <form action="">
                    <span>
                        <MapPinLine/> Endereço de Entrega
                    </span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <input type="number" />
                    <input type="text" />
                    <input type="number" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="number" />
                </form>
            </FormAddressAndPayment>

            <SelectedProducts>

            </SelectedProducts>
        </CheckoutContainer>
    )
}