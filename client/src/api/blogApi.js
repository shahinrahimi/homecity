import { api } from "./api"

export const getAllBlogs = async () => {
    const response = await api.get("/blogs")
    return response.data
}

export const createNewBlog = async ({ blogForm, accessToken }) => {
    const response = await api.post("/blogs", blogForm, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateBlog = async ({ id, blogForm, accessToken }) => {
    const response = await api.patch(`/blogs/${id}`, blogForm, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

export const deleteBlog = async ({ id, accessToken }) => {
    const response = await api.delete(`/blogs/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}