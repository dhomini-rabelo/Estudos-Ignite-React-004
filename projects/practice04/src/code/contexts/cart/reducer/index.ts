import { CartContextType } from '../types'
import { CartActions } from './actions'
import { CartReducerAction } from './types'

export function CartReducer(
  state: CartContextType,
  action: CartReducerAction,
): CartContextType {
  return { ...state }
}