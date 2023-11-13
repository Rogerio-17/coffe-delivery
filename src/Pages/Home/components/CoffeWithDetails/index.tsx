import {
  ContainerCoffe,
  FooterCard,
  ShopingCartContainerFooter,
  TagContainer,
} from "./style";
import { CountCoffe } from "../../../../components/CountCoffe";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  
}

export interface CoffeDetailsProps {
  coffe: Coffe;
}

export function CoffeWithDetails({ coffe }: CoffeDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

    const formatPrice = formatMoney(coffe.price)
    const { addCoffeToCart } = useCart()

    function handleAddToCart() {
      const coffeToAdd = {
        ...coffe,
        quantity,
      }

      addCoffeToCart(coffeToAdd)
    }

  return (
    <ContainerCoffe>
      <img src={`/coffes/${coffe.photo}`} />

      <TagContainer>
        {coffe.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </TagContainer>

      <h4>{coffe.name}</h4>
      <p>{coffe.description}</p>

      <FooterCard>
        <div>
          <span>R$</span>
          <p>{formatPrice}</p>
        </div>

        <CountCoffe
        onIncrise={handleIncrease}
        onDecrise={handleDecrease}
        quantity={quantity}
        ></CountCoffe>
        <ShopingCartContainerFooter onClick={() => handleAddToCart()}>
          <ShoppingCart size={20} weight="fill" />
        </ShopingCartContainerFooter>
      </FooterCard>
    </ContainerCoffe>
  );
}
