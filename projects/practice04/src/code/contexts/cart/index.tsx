import { createContext, ReactNode, useReducer } from "react";
import { ProductSchemaType } from "../../schemas/products";
import { CartReducer } from "./reducer";
import { CartConsumer } from "./reducer/actions";
import { CartContextType } from "./types";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useReducer(CartReducer, {
    products: []
  })

  function addProduct(newProduct: ProductSchemaType) {
    cartDispatch(CartConsumer.add(newProduct))
  }

  function removeProduct(removedProductId: string) {
    cartDispatch(CartConsumer.remove(removedProductId))
  }


  return (
    <CartContext.Provider value={{ data: cart, actions: { addProduct, removeProduct } }}>
      {children}
    </CartContext.Provider>
  )
}