import { OrderDetails, OrderDetailsContainer, SuccessContainer } from "./style";
import img from "../../assets/ilustracaoMoto.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { CurrencyDollar, MapPin, Money, Timer } from "phosphor-react";

export function Success() {
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
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
            </div>
          </div>

        </OrderDetails>
      </OrderDetailsContainer>

      <img src={img} alt="Um cara de moto com uma caixa atrás" />
    </SuccessContainer>
  );
}
