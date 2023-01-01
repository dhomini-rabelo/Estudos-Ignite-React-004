import { ProductSchemaType } from "../../../schemas/products";

/* eslint-disable */
export enum CartActions {
  ADD = 'ADD',
}
/* eslint-enable */

export const CartConsumer = {
  add(newProduct: ProductSchemaType) {
    return {
      type: CartActions.ADD,
      payload: {
        newProduct,
      }
    }
  }
}