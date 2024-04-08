import { IUser } from "../models/User"
import { get, post } from "./serviceBase"

export const saveUser = async (user: IUser) => {
    const response = await post(
      "http://localhost:3000/api/auth/createUser",
      user
    )
    return response.data
  }

export const login = async (user: IUser) => {
    const response = await post(
      "http://localhost:3000/api/auth/login",
      user,
    )
    return response
  }

export const authorize = async () => {
    const response = await get(
      "http://localhost:3000/api/auth/authorize"
    )
    return response
  }

export const logoutFromServer = async () => {
    const response = await get(
      "http://localhost:3000/api/auth/logout"
    )
    return response
  }