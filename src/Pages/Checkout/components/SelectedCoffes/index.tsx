import { ConfirmationSection } from "./ConfimationSection";
import { DetailsContainer, SelectedCoffesContainer } from "./style";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeCartCard";

export function SelectedCoffes() {
  const { cartItems } = useCart();
  
  return (
    <SelectedCoffesContainer>
      <h2>Cafés selecionados</h2>

      <DetailsContainer>
        {cartItems.map((coffe) => (
          <CoffeCartCard coffe={coffe}/>
        ))}
        
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffesContainer>
  );
}
