import { CountCoffeContainer } from "./style";

interface QuantityInputProps {
    quantity: number,
    onIncrise: () => void,
    onDecrise: () => void,
}

export function CountCoffe({onIncrise, onDecrise, quantity}: QuantityInputProps) {
    return (
        <CountCoffeContainer>
        <button disabled={quantity <= 1} onClick={() => onDecrise()}>-</button>
        <input type="text" value={quantity}/>
        <button onClick={() => onIncrise()}>+</button>
        </CountCoffeContainer>
    )
}