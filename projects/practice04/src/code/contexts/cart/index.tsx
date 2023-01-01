import { createContext, ReactNode, useReducer } from "react";
import { CartReducer } from "./reducer";
import { CartContextType } from "./types";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useReducer(CartReducer, {
    data: {
      products: []
    }
  })


  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}