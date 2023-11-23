import { api } from "./api"

export const createNewBlog = async (blogObj) => {
    const response = await api.post("/blogs", blogObj, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return response
}

export const getAllUser = async ({ token }) => {
    const response = await api.get("/users", {
        headers: {Authorization: `Bearer ${token}`}
    })
    return response
}