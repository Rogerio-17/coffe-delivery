import { useContext } from "react";
import { CartContext } from "../context/CartContent";

export function useCart() {
    const context = useContext(CartContext)
    return context
}