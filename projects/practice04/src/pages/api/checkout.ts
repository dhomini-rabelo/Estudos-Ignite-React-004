import { NextApiRequest, NextApiResponse } from "next";
import { ProductSchemaType } from "../../code/schemas/products";
import { stripe } from "../../code/services";
import { PROJECT_URL } from "../../code/settings";

interface BodyType {
  products: ProductSchemaType[]
  cancelUrl?: string
}

interface ErrorsType { [field: string]: string }


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  function validateBody({ products }: BodyType) {
    const errors: ErrorsType[] = []
    products.forEach(product => {
      const itemError: ErrorsType = {}
      if (!product.priceId) {
        itemError.priceId = 'This field is required'
      }
      if (Object.keys(itemError).length > 0) {
        errors.push(itemError)
      }
    })
    if (Object.keys(errors).length > 0) {
      return {
        isValid: false,
        errors: errors,
      }
    } else {
      return {
        isValid: true,
        errors: null,
      }
    }
  }

  const body: BodyType = req.body
  if (req.method !== 'POST') {
    return res.status(405)
  } else if (!body.products || body.products.length === 0) {
    return res.status(400).json({
      errors: {
        products: 'This field is required'
      }
    })
  }

  const validationProcess = validateBody(body)

  if (!validationProcess.isValid) {
    return res.status(400).json({
      errors: validationProcess.errors
    })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: body.products.map(product => ({ price: product.priceId, quantity: 1 })),
    success_url: `${PROJECT_URL}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: body.cancelUrl || PROJECT_URL,
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}