import { ProductSchemaType } from "../../schemas/products";


export interface CartContextType {
  data: {
    products: ProductSchemaType[],
  }
}
