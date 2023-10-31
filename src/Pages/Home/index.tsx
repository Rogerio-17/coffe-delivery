import { Intro } from "../../components/Intro"
import { CoffeContainer } from "./style"
import { CoffeWithDetails } from "./components/CoffeWithDetails/index"
import { AllCoffes } from "./components/CoffeWithDetails/style"

export function Home() {
    return(
        <AllCoffes>
            <Intro/>

            <h2>Nossos cafés</h2>

            <CoffeContainer>
                <CoffeWithDetails></CoffeWithDetails>
                <CoffeWithDetails></CoffeWithDetails>
                <CoffeWithDetails></CoffeWithDetails>
                <CoffeWithDetails></CoffeWithDetails>
            </CoffeContainer>
        </AllCoffes>
    )
}