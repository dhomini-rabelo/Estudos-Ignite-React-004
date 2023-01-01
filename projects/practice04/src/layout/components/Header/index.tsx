import Link from "next/link"
import { Handbag } from "phosphor-react"
import { useContext, useState } from "react"
import { CartContext } from "../../../code/contexts/cart"
import { Cart } from "../Cart"

export function Header() {
  const { data: { products } } = useContext(CartContext)
  const hasProductsInTheCart = products.length > 0
  const [cartViewIsOpened, setCartViewIsOpened] = useState(false)
  const openCartView = () => hasProductsInTheCart && setCartViewIsOpened(true)
  const closeCartView = () => setCartViewIsOpened(false)

  return (
    <>
      <header className="py-8 px-0 w-full max-w-[1180px] mx-auto flex items-center justify-between">
        <Link href="/">
          <img src="/global/logo.svg" alt="project-logo" />
        </Link>
        {hasProductsInTheCart ? (
          <button className="text-Gray-100 p-3 font-bold relative" onClick={openCartView}>
            <div className="w-6 h-6 bg-Green-500 absolute text-center rounded-full -top-2 -right-2">
              <strong className="text-sm text-White lh-160">1</strong>
            </div>
            <Handbag size={24} />
          </button>
        ) : (
          <button className="text-Gray-500 p-3 font-bold cursor-not-allowed">
            <Handbag size={24} />
          </button>
        )}
      </header>
      {cartViewIsOpened && (
        <Cart handleClose={closeCartView} />
      )}
    </>
  )
}