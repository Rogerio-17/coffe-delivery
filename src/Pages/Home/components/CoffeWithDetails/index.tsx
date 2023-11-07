import {
  ContainerCoffe,
  FooterCard,
  ShopingCartContainerFooter,
  TagContainer,
} from "./style";
import { CountCoffe } from "../../../../components/CountCoffe";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeDetailsProps {
  coffe: Coffe;
}

export function CoffeWithDetails({ coffe }: CoffeDetailsProps) {
    const formatPrice = formatMoney(coffe.price)

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

        <CountCoffe></CountCoffe>
        <ShopingCartContainerFooter>
          <ShoppingCart size={20} weight="fill" />
        </ShopingCartContainerFooter>
      </FooterCard>
    </ContainerCoffe>
  );
}
