import { ProductSchemaType } from "../../../schemas/products";

/* eslint-disable */
export enum CartEvents {
  ADD = 'on-add-product',
}

export enum CartActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
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
  },
  remove(removedProductId: string) {
    return {
      type: CartActions.REMOVE,
      payload: {
        removedProductId,
      }
    }
  },
}