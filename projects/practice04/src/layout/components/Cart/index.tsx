import { X } from "phosphor-react";
import { Div } from "./styles";

export function Cart({ handleClose }: { handleClose: () => void }) {
  return (
    <Div.container className="absolute right-0 top-0 bottom-0 max-w-[480px] w-full bg-Gray-800 px-12 pt-6 pb-12 flex flex-col">
      <div className="flex justify-end w-full font-bold">
        <X onClick={handleClose} size={24} className="text-Gray-500 cursor-pointer" />
      </div>

      <h3 className="lh-160 font-bold text-clg mt-6 pb-8">Sacola de compras</h3>

      <main className="t-shirts grow overflow-auto">
        <div className="t-shirt flex gap-x-5">
          <div className="bg-df-gradient rounded-lg flex items-center justify-center">
            <img src="/camisas/camisa01.png" alt="cart-item-image" className="w-24 h-24" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-cmd lh-160 text-Gray-300">Camiseta Explorer</h4>
              <strong className="text-cmd lh-160 text-Gray-100">R$ 62,90</strong>
            </div>
            <strong className="lh-160 text-Green-500">Remover</strong>
          </div>
        </div>
      </main>

      <footer>

        <div className="feedback">
          <div className="flex items-center justify-between lh-160 text-cmd text-Gray-300">
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div className="flex items-center justify-between lh-160 text-cmd text-Gray-100 font-bold">
            <span>Total</span>
            <span>R$ 270,00</span>
          </div>
        </div>

        <button className="mt-14 w-full block bg-Green-500 font-bold text-Gray-100 py-5 rounded-lg">
          Finalizar compra
        </button>

      </footer>

    </Div.container>
  )
}