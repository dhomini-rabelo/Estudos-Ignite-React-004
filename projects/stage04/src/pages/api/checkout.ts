import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../code/services";
import { PROJECT_URL } from "../../code/settings";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = 'price_1MGu4dBjumnS0oY395WcAoGH'
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
    success_url: `${PROJECT_URL}/sucesso`,
    cancel_url: `${PROJECT_URL}/cancelamento`,
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}