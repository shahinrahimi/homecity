import api from "../api"

export const getAllFacilities = async () => {
    const response = await api.get("/facilities")
    return response.data
}

export const createNewFacility = async ({ formData, accessToken }) => {
    console.log("create new facility ran", data)
    const response = await api.post("/facilities", formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateFacility = async ({ id, formData, accessToken }) => {
    const response = await api.patch(`/facilities/${id}`, formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

export const deleteFacility = async ({ id, accessToken }) => {
    const response = await api.delete(`/facilities/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}