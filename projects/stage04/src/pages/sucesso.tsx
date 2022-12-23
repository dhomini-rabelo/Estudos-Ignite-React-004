import Link from "next/link";
import { Div } from "../layout/styles/pages/sucesso";

export default function SuccessfulPayment() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <h1 className="text-c2xl text-Gray-100 font-bold">Compra efetuada!</h1>
      <Div.imageContainer className="w-full max-w-[130px] h-[145px] rounded-lg p-1 flex items-center justify-center mt-16">
        <img src="/camisas/camisa01.png" alt="" />
      </Div.imageContainer>
      <p className="text-cxl text-Gray-300 max-w-[560px] text-center mt-8 lh-130">
        Uhuul, sua compra já está a caminho da sua casa.
      </p>
      <Link href="/" className="mt-20 block text-Green-500 text-clg hover:text-Green-300 font-bold">
        Voltar ao catálogo
      </Link>
    </main>
  )
}


