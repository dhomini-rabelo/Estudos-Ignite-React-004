import { ProductSchemaType } from "../../schemas/products";


export interface CartDataType {
  products: ProductSchemaType[],
}

export interface CartContextType {
  data: CartDataType
}
