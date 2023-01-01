import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { ProductSchemaType } from "../../code/schemas/products"
import { stripe } from "../../code/services"
import { priceFormatter } from "../../code/utils/formatter"
import { Div } from "../../layout/styles/pages/products/id"

interface Props {
  product: ProductSchemaType
}



export default function Product({ product }: Props) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <div>Carregando...</div>
  }

  async function handleBuy() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        productId: product.id,
        priceId: product.priceId,
      })
      window.location.href = response.data.checkoutUrl
    } catch {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar para o checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] mx-auto">
        <Div.imageContainer className="col-span-1 w-full max-w-[576px] rounded-lg p-1 flex items-center justify-center">
          <img src={product.imageUrl} alt="product-image" />
        </Div.imageContainer>
        <div className="col-span-1 flex flex-col">
          <h1 className="text-c2xl text-Gray-300 font-bold">{product.name}</h1>
          <span className="mt-4 block text-c2xl text-Green-300">{product.price}</span>
          <p className="mt-10 text-cmd lh-160 text-Gray-300">{product.description}</p>
          <button onClick={handleBuy} disabled={isCreatingCheckoutSession}
            className="mt-auto bg-Green-500 border-0 text-White rounded-lg p-5 cursor-pointer font-bold text-cmd hover:bg-Green-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-Green-500"
          >
            Comprar agora
          </button>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params!.id as string
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const priceSettings = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatter.format(priceSettings.unit_amount! / 100),
        description: product.description,
        priceId: priceSettings.id,
      }
    },
    revalidate: 60 * 60 * 1, // 2 hours
  }
}