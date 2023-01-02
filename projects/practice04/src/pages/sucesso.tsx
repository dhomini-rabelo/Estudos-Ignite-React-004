import { GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head"
import Stripe from "stripe";
import { stripe } from "../code/services";
import { Div } from "../layout/styles/pages/sucesso";


interface Props {
  customer: string | null
  products: {
    id: string
    name: string
    imageUrl: string
  }[] | null
}


export default function SuccessfulPayment({ customer, products }: Props) {
  return (
    <>
      <Head>
        <title>Sucesso | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
        <h1 className="text-c2xl text-Gray-100 font-bold">Compra efetuada!</h1>
        <div className="flex item-center justify-center -ml-[52px]">
          {products?.map(product => (
            <Div.imageContainer className="w-full max-w-[140px] h-[145px] flex items-center justify-center mt-16 rounded-full -mr-[52px]" key={product.id}>
              <img src={product ? product.imageUrl : '/camisas/camisa01.png'} alt="product-image" />
            </Div.imageContainer>
          ))}
        </div>
        <p className="text-cxl text-Gray-300 max-w-[560px] text-center mt-8 lh-130">
          {(products && customer) ? (
            <>Uhuul <strong>{customer}</strong>, sua compra de <strong>{products.length}</strong> camisetas já está a caminho da sua casa. </>
          ) : (
            <>Uhuul, sua compra já está a caminho da sua casa.</>
          )}
        </p>
        <Link href="/" className="mt-20 block text-Green-500 text-clg hover:text-Green-300 font-bold">
          Voltar ao catálogo
        </Link>
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string | undefined
  if (sessionId) {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    })
    const customer = session.customer_details!.name
    const products = session.line_items!.data!.map((cartItem) => {
      const product = cartItem.price?.product as Stripe.Product
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
      }
    })
    return {
      props: {
        customer,
        products,
      },
    }
  } else {
    return {
      props: {
        customer: null,
        product: null,
      },
    }
  }

}