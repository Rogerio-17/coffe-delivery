import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffe } from "../Pages/Home/components/CoffeWithDetails";
import { produce } from "immer";

export interface CartItem extends Coffe {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeToCart: (coffe: CartItem) => void;
  quantityCart: number;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFE_ITENS_STORAGE_KEY = "coffesDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFE_ITENS_STORAGE_KEY);

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });
  const quantityCart = cartItems.length;

  function addCoffeToCart(coffe: CartItem) {
    const coffeAlreadyExistesInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffe.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistesInCart <= 0) {
        draft.push(coffe);
      } else {
        draft[coffeAlreadyExistesInCart].quantity += coffe.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeExistsInCart >= 0) {
        const item = draft[coffeExistsInCart];
        draft[coffeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeExistsInCart >= 0) {
        draft.splice(coffeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFE_ITENS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityCart,
        addCoffeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
