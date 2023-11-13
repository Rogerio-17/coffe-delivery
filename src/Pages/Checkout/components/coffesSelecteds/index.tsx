import { Trash } from "phosphor-react";
import { CountCoffe } from "../../../../components/CountCoffe";
import { CoffesSelectedContainer, Information } from "./style";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeSelected {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
}

interface Coffe {
  coffe: CoffeSelected;
}

export function CoffesSelecteds({ coffe }: Coffe) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const somePrice = coffe.price * coffe.quantity;
  const priceFormated = formatMoney(somePrice);

  function handleIncrease() {
    changeCartItemQuantity(coffe.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffe.id, "decrease");
  }
  

  function handleRemoveCartItem() {
    removeCartItem(coffe.id)
  }

  return (
    <CoffesSelectedContainer>
      <img src={`/coffes/${coffe.photo}`} />
      <Information>
        <p>{coffe.name}</p>
        <div className="buttons">
          <CountCoffe quantity={coffe.quantity} onIncrise={handleIncrease} onDecrise={handleDecrease} ></CountCoffe>
          <button className="remove" onClick={handleRemoveCartItem}>
            <Trash />
            Remover
          </button>
        </div>
      </Information>
      <span>R$ {priceFormated}</span>
    </CoffesSelectedContainer>
  );
}
