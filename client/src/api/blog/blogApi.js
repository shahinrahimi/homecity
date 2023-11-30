import api from "../api"

export const getAllBlogs = async () => {
    const response = await api.get("/blogs")
    return response.data
}

export const createNewBlog = async ({ formData, accessToken }) => {
    const response = await api.post("/blogs", formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateBlog = async ({ id, formData, accessToken }) => {
    const response = await api.patch(`/blogs/${id}`, formData, {
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