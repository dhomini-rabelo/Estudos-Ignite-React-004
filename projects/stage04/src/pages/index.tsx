import { A, Div } from "../layout/styles/pages/home";

export default function Home() {
  return (
    <Div.container className="flex gap-12 text-white w-full ml-auto">
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center">
        <img src="/camisas/camisa01.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center">
        <img src="/camisas/camisa01.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
    </Div.container>
  )
}