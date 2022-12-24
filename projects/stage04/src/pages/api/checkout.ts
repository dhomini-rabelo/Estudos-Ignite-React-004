import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../code/services";
import { PROJECT_URL } from "../../code/settings";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId, productId } = req.body
  if (req.method !== 'POST') {
    return res.status(405)
  } else if (!priceId) {
    return res.status(400).json({
      errors: {
        priceId: 'This field is required'
      }
    })
  } else if (!productId) {
    return res.status(400).json({
      errors: {
        productId: 'This field is required'
      }
    })
  }
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
    success_url: `${PROJECT_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PROJECT_URL}/produtos/${productId}`,
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}