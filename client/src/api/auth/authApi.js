import api from "../api"

// auth api
export const login = async ({ username, password }) => {
    const response = await api.post("/auth", { username, password })
    return response
}

export const refresh = async () => {
    const response = await api.get("/auth/refresh")
    return response
}

export const logout = async () => {
    const response = await api.post("/auth/logout")
    return response
}

export const validate = async ({ accessToken }) => {
    const response = await api.get(`/auth/validate`,{
        headers: { 
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response
}

