import { X } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../code/contexts/cart";
import { priceFormatter } from "../../../code/utils/formatter";
import { Div } from "./styles";

export function Cart({ handleClose }: { handleClose: () => void }) {
  const { data: { products } } = useContext(CartContext)
  return (
    <Div.container className="absolute right-0 top-0 bottom-0 max-w-[480px] w-full bg-Gray-800 px-12 pt-6 pb-12 flex flex-col">
      <div className="flex justify-end w-full font-bold">
        <X onClick={handleClose} size={24} className="text-Gray-500 cursor-pointer" />
      </div>

      <h3 className="lh-160 font-bold text-clg mt-6 mb-2">Sacola de compras</h3>

      <main className="t-shirts grow overflow-auto">
        {products.map(product => (
          <div className="t-shirt flex gap-x-5 mt-6" key={product.id}>
            <div className="bg-df-gradient rounded-lg flex items-center justify-center">
              <img src={product.imageUrl} alt="cart-item-image" className="w-24 h-24" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-cmd lh-160 text-Gray-300">{product.name}</h4>
                <strong className="text-cmd lh-160 text-Gray-100">{priceFormatter.format(product.price)}</strong>
              </div>
              <strong className="lh-160 text-Green-500">Remover</strong>
            </div>
          </div>
        ))}
      </main>

      <footer>

        <div className="feedback">
          <div className="flex items-center justify-between lh-160 text-cmd text-Gray-300">
            <span>Quantidade</span>
            <span>{products.length === 1 ? `${products.length} item` : `${products.length} itens`}</span>
          </div>
          <div className="flex items-center justify-between lh-160 text-cmd text-Gray-100 font-bold">
            <span>Total</span>
            <span>{priceFormatter.format(products.reduce((acc, product) => (product.price + acc), 0))}</span>
          </div>
        </div>

        <button className="mt-14 w-full block bg-Green-500 font-bold text-Gray-100 py-5 rounded-lg">
          Finalizar compra
        </button>

      </footer>

    </Div.container>
  )
}