import { ProductSchemaType } from "../../schemas/products";


export interface CartDataType {
  products: ProductSchemaType[],
}

export interface CartContextType {
  data: CartDataType
  actions: {
    addProduct: (newProduct: ProductSchemaType) => void
    removeProduct: (removedProductId: string) => void
  }
}
