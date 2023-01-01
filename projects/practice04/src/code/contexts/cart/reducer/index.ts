import { CartDataType } from '../types'
import { CartActions } from './actions'
import { CartReducerAction } from './types'

export function CartReducer(
  state: CartDataType,
  action: CartReducerAction,
): CartDataType {
  return { ...state }
}