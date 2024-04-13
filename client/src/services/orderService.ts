
import { Order } from "../models/Order"
import { post } from "./serviceBase"

export const getOrders = async (email: string) => {
    const body = {
        email
    }
    const response = await post<Order[]>(
      "http://localhost:3000/api/orders/get-orders",
      body
    )
    return response.data
  }

