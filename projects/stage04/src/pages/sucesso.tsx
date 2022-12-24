import { GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head"
import Stripe from "stripe";
import { stripe } from "../code/services";
import { Div } from "../layout/styles/pages/sucesso";


interface Props {
  customer: string | null
  product: {
    name: string
    imageUrl: string
  } | null
}


export default function SuccessfulPayment({ customer, product }: Props) {
  return (
    <>
      <Head>
        <title>Sucesso | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
        <h1 className="text-c2xl text-Gray-100 font-bold">Compra efetuada!</h1>
        <Div.imageContainer className="w-full max-w-[130px] h-[145px] rounded-lg p-1 flex items-center justify-center mt-16">
          <img src={product ? product.imageUrl : '/camisas/camisa01.png'} alt="product-image" />
        </Div.imageContainer>
        <p className="text-cxl text-Gray-300 max-w-[560px] text-center mt-8 lh-130">
          {(product && customer) ? (
            <>Uhuul <strong>{customer}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.</>
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
    const product = session.line_items!.data[0].price!.product as Stripe.Product
    return {
      props: {
        customer,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        },
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