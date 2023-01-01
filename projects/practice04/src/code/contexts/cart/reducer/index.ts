import { CartDataType } from '../types'
import { CartActions } from './actions'
import { CartReducerAction } from './types'

export function CartReducer(
  state: CartDataType,
  action: CartReducerAction,
): CartDataType {
  switch (action.type) {
    case CartActions.ADD:
      return { products: [...state.products, action.payload.newProduct] }
    case CartActions.REMOVE:
      return { products: state.products.filter(product => product.id !== action.payload.removedProductId) }

  }
}