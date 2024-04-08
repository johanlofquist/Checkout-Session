export interface Product {
    id: string,
    name: string,
    description: string,
    images: string[]
    default_price: {
        unit_amount: number
    }
}