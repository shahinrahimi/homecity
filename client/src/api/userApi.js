import { api } from "./api"

export const register = async ({ username, password }) => {
    const response = await api.post("/users", {username, password})
    return response
}

export const getAllUser = async ({ token }) => {
    const response = await api.get("/users", {
        headers: {Authorization: `Bearer ${token}`}
    })
    return response
}