import { useRouter } from "next/router"
import { Div } from "../../layout/styles/pages/products/id"

export default function Product() {
  const { query } = useRouter()
  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] mx-auto">
      <Div.imageContainer className="col-span-1 w-full max-w-[576px] rounded-lg p-1 flex items-center justify-center"></Div.imageContainer>
      <div className="col-span-1 flex flex-col">
        <h1 className="text-c2xl text-Gray-300">Camisa X</h1>
        <span className="mt-4 block text-c2xl text-Gray-300">R$ 79,90</span>
        <p className="mt-10 text-cmd lh-160 text-Gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit et animi neque cumque dignissimos ab dolor, a quam. Aut accusamus tempora, tempore vel illum optio ex molestias et nobis cumque.</p>
        <button className="mt-auto bg-Green-500 border-0 text-White rounded-lg p-5 cursor-pointer font-bold text-cmd hover:bg-Green-300">
          Comprar agora
        </button>
      </div>
    </main>
  )
}