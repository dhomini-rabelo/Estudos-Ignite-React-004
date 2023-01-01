import Link from "next/link"
import { useRouter } from "next/router"
import { Handbag } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../code/contexts/cart"
import { CartEvents } from "../../../code/contexts/cart/reducer/actions"
import { Cart } from "../Cart"

export function Header() {
  const { query } = useRouter()
  const { data: { products } } = useContext(CartContext)
  const [cartViewIsOpened, setCartViewIsOpened] = useState(false)
  const hasProductsInTheCart = products.length > 0
  const openCartView = () => setCartViewIsOpened(true)
  const closeCartView = () => setCartViewIsOpened(false)

  useEffect(() => {
    const onAddProduct = query[CartEvents.ADD] === 'true'
    if (onAddProduct && hasProductsInTheCart) {
      openCartView()
    }
  }, [query])

  return (
    <>
      <header className="py-8 px-0 w-full max-w-[1180px] mx-auto flex items-center justify-between">
        <Link href="/">
          <img src="/global/logo.svg" alt="project-logo" />
        </Link>
        {hasProductsInTheCart ? (
          <button className="text-Gray-100 p-3 font-bold relative" onClick={openCartView}>
            <div className="w-6 h-6 bg-Green-500 absolute text-center rounded-full -top-2 -right-2">
              <strong className="text-sm text-White lh-160">{products.length}</strong>
            </div>
            <Handbag size={24} />
          </button>
        ) : (
          <button className="text-Gray-500 p-3 font-bold" onClick={openCartView}>
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