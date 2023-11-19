import { OrderDetails, OrderDetailsContainer, SuccessContainer } from "./style";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CompleteOrderForm/PaymentMethodoOptions";
import { useEffect } from "react"

export function Success() {
  const {state} = useLocation()
  const address:ConfirmOrderFormData = state
  const navigate = useNavigate()

  useEffect(() => {
    if(!address){
      navigate("/")
    }
  }, []);

  if(!address) return <></>
  
  return (
    <SuccessContainer>
      <OrderDetailsContainer>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderDetails>
          <div className="content">
            <InfoWithIcon
              cor="purple-500"
              icon={<MapPin size={26} weight="fill" />}
            />
            <div>
              <p>Entrega em <span>{address.rua}, {address.numero}</span></p>
              <p>{address.bairro} - {address.cidade}, {address.uf}</p>
            </div>
          </div>

          <div className="content">
            <InfoWithIcon
              cor="yellow-500"
              icon={<Timer size={26} weight="fill" />}
            />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min </span> 
            </div>
          </div>

          <div className="content">
            <InfoWithIcon
              cor="yellow-dark-800"
              icon={<CurrencyDollar size={26} weight="fill" />}
            />
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentMethods[address.paymentMethod].label}</span>
            </div>
          </div>

        </OrderDetails>
      </OrderDetailsContainer>

      <img src="/ilustrator/ilustracaoMoto.svg" alt="Um cara de moto com uma caixa atrás" />
    </SuccessContainer>
  );
}
