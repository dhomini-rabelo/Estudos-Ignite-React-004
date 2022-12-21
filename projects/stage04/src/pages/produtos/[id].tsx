import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../code/services"
import { priceFormatter } from "../../code/utils/formatter"
import { Div } from "../../layout/styles/pages/products/id"

interface Props {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
  }
}



export default function Product({ product }: Props) {
  const { query } = useRouter()
  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] mx-auto">
      <Div.imageContainer className="col-span-1 w-full max-w-[576px] rounded-lg p-1 flex items-center justify-center">
        <img src={product.imageUrl} alt="product-image" />
      </Div.imageContainer>
      <div className="col-span-1 flex flex-col">
        <h1 className="text-c2xl text-Gray-300">{product.name}</h1>
        <span className="mt-4 block text-c2xl text-Gray-300">{product.price}</span>
        <p className="mt-10 text-cmd lh-160 text-Gray-300">{product.description}</p>
        <button className="mt-auto bg-Green-500 border-0 text-White rounded-lg p-5 cursor-pointer font-bold text-cmd hover:bg-Green-300">
          Comprar agora
        </button>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params!.id as string
  const product = await stripe.products.retrieve(productId, {
    expand: ['data.default_price'],
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
      }
    },
    revalidate: 60 * 60 * 1, // 2 hours
  }
}