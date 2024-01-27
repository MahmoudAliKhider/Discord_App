import axios from "axios";

const apiClient = axios.create({
    baseUrl: "http://localhost/5050",
    timeout: 1000
})

export const login = async (data) => {
    try {
        return await apiClient.post('/api/auth/login', data)
    } catch (exeption) {
        return {
            error: true,
            exeption
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/api/auth/register', data)
    } catch (exeption) {
        return {
            error: true,
            exeption
        }
    }
}