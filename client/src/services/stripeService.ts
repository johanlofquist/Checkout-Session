import { ICartItem } from "../context/CartContext"
import { CheckoutResponse } from "../models/CheckoutResponse"
import { ProductsResponse } from "../models/ProductsResponse"
import { VerifyResponse } from "../models/VerifyResponse"
import { get, post } from "./serviceBase"

export const getProducts = async () => {
    const response = await get<ProductsResponse>(
      "http://localhost:3000/api/stripe/products"
    )
    return response.data
  }

export const checkout = async (cart: ICartItem[], stripeId: string | undefined) => {
    const checkoutBody = {
      cart,
      stripeId
    }
    const response = await post<CheckoutResponse>(
      "http://localhost:3000/api/stripe/checkout",
      checkoutBody
    )
    return response.data
  }

export const verifySessionPost = async (sessionId: string) => {
    const verifyBody = {
      sessionId
    }
    const response = await post<VerifyResponse>(
      "http://localhost:3000/api/stripe/verify-session",
      verifyBody
    )
    return response
  }

