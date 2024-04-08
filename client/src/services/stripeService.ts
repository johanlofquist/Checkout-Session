import { ProductsResponse } from "../models/ProductsResponse"
import { get } from "./serviceBase"

export const getProducts = async () => {
    const response = await get<ProductsResponse>(
      "http://localhost:3000/api/stripe/products"
    )
    return response.data
  }