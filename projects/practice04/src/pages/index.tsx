import { A, Div } from "../layout/styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import { stripe } from "../code/services";
import Stripe from "stripe";
import { priceFormatter } from "../code/utils/formatter";
import Link from "next/link";


interface Props {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
  }[]
}


export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <Div.container className="flex text-white w-full ml-auto keen-slider" ref={sliderRef}>
      {products.map(product => (
        <Link key={product.id} href={`/produtos/${product.id}`} prefetch={false} legacyBehavior>
          <A.product className="cursor-pointer rounded-lg p-1 flex items-center justify-center keen-slider__slide">
            <img src={product.imageUrl} alt="t-shirt" />
            <footer className="flex items-center justify-between">
              <strong className="text-clg">{product.name}</strong>
              <span className="text-cxl font-bold text-Green-300">{product.price}</span>
            </footer>
          </A.product>
        </Link>
      ))}
    </Div.container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const request = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = request.data.map(product => {
    const priceSettings = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter.format(priceSettings.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}