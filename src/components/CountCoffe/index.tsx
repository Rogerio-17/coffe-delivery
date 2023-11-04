import { useState } from "react";
import { CountCoffeContainer } from "./style";

export function CountCoffe() {
    const [coffeQtd, setCoffeQtd] = useState(0)

    function some() {
        setCoffeQtd(coffeQtd + 1)
    }

    function sub() {
        if (coffeQtd > 0) {
            setCoffeQtd(coffeQtd - 1)
        }
    }

    return (
        <CountCoffeContainer>
        <button onClick={() => sub()}>-</button>
        <input type="text" value={coffeQtd}/>
        <button onClick={() => some()}>+</button>
        </CountCoffeContainer>
    )
}