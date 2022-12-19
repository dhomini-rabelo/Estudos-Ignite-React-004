import { A, Div } from "../layout/styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <Div.container className="flex text-white w-full ml-auto keen-slider" ref={sliderRef}>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center keen-slider__slide">
        <img src="/camisas/camisa01.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center keen-slider__slide">
        <img src="/camisas/camisa02.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center keen-slider__slide">
        <img src="/camisas/camisa03.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center keen-slider__slide">
        <img src="/camisas/camisa03.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
      <A.product href="/" className="rounded-lg p-1 flex items-center justify-center keen-slider__slide">
        <img src="/camisas/camisa03.png" alt="t-shirt-01" />
        <footer className="flex items-center justify-between">
          <strong className="text-clg">Camisa 00</strong>
          <span className="text-cxl font-bold text-Green-300">R$ 80,00</span>
        </footer>
      </A.product>
    </Div.container>
  )
}