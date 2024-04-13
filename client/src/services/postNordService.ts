import { post } from "./serviceBase"

export const findServiceCenter = async (postalCode: string) => {
    const body = {
        postalCode
    }
    const response = await post(
      "http://localhost:3000/api/postnord/find-service-center",
      body
    )
    return response.data
  }