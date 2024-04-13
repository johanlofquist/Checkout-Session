import { OrderProduct } from "./OrderProduct"

export interface Order {
    orderNumber: string
    date: string
    total: number
    products: OrderProduct[]
}