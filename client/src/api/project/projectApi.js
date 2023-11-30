import api from "../api"

export const getAllProjects = async () => {
    const response = await api.get("/projects")
    return response.data
}

export const createNewProject = async ({ formData, accessToken }) => {
    const response = await api.post("/projects", formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}


export const updateProject = async ({ id, formData, accessToken }) => {
    const response = await api.patch(`/projects/${id}`, formData, {
        headers: { 
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

export const deleteProject = async ({ id, accessToken }) => {
    const response = await api.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
    return response
}