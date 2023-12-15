import api from "../api"

export const getAllMessages = async ({ accessToken }) => {
    const response = await api.get("/messages")
    return response.data
}

export const createNewMessage = async ({ data }) => {
    console.log("create new message ran", data)
    const response = await api.post("/messages", data)
    return response
}

export const deleteMessage = async ({ id, accessToken }) => {
    const response = await api.delete(`/messages/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}