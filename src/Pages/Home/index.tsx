import { Intro } from "./components/Intro";
import { CoffeContainer } from "./style";
import { CoffeWithDetails } from "./components/CoffeWithDetails/index";
import { AllCoffes } from "./components/CoffeWithDetails/style";
import { coffees } from "../../data/coffes";


export function Home() {
  return (
    <AllCoffes>
      <Intro />

      <h2>Nossos cafés</h2>

      <CoffeContainer>
        {coffees.map((coffe) => (
          <CoffeWithDetails key={coffe.id} coffe={coffe}></CoffeWithDetails>
        ))}
      </CoffeContainer>
    </AllCoffes>
  );
}
