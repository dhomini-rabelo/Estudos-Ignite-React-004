import { A, Div } from "../layout/styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import { stripe } from "../code/services";
import Stripe from "stripe";
import { priceFormatter } from "../code/utils/formatter";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Head from "next/head";
import { ProductSchemaType } from "../code/schemas/products";
import { useContext } from "react";
import { CartContext } from "../code/contexts/cart";


interface Props {
  productsForSale: ProductSchemaType[]
}


export default function Home({ productsForSale }: Props) {
  const { data: { products: productsInCart } } = useContext(CartContext)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <Div.container className="flex text-white w-full ml-auto keen-slider" ref={sliderRef}>
        {productsForSale.filter(productForSale => ((productsInCart.find(productInCart => productInCart.id === productForSale.id)) === undefined)).map(product => (
          <Link key={product.id} href={`/produtos/${product.id}`} prefetch={false} legacyBehavior>
            <A.product className="cursor-pointer rounded-lg p-1 flex items-center justify-center keen-slider__slide">
              <img src={product.imageUrl} alt="t-shirt" />
              <footer className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start">
                  <strong className="text-clg">{product.name}</strong>
                  <span className="text-cxl font-bold text-Green-300">{priceFormatter.format(product.price)}</span>
                </div>
                <button className="p-3 bg-Green-500 rounded-md font-bold">
                  <Handbag size={32} />
                </button>
              </footer>
            </A.product>
          </Link>
        ))}
      </Div.container>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const request = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const productsForSale = request.data.map(product => {
    const priceSettings = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (priceSettings.unit_amount! / 100),
      description: product.description,
      priceId: priceSettings.id,
    }
  })

  return {
    props: {
      productsForSale
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}