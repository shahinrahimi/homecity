import api from "../api"

export const getAllTags = async () => {
    const response = await api.get("/tags")
    return response.data
}

export const createNewTag = async ({ data, accessToken }) => {
    console.log("create new tag ran", data)
    const response = await api.post("/tags", data, {
        headers: { 
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateTag = async ({ id, data, accessToken }) => {
    const response = await api.patch(`/tags/${id}`, data, {
        headers: { 
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

export const deleteTag = async ({ id, accessToken }) => {
    const response = await api.delete(`/tags/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}