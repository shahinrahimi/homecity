import api from "../api"

export const getAllFranchises = async () => {
    const response = await api.get("/franchises")
    return response.data
}

export const createNewFranchise = async ({ formData, accessToken }) => {
    const response = await api.post("/franchises", formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateFranchise = async ({ id, formData, accessToken }) => {
    const response = await api.patch(`/franchises/${id}`, formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

export const deleteFranchise = async ({ id, accessToken }) => {
    const response = await api.delete(`/franchises/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}