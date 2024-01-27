import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5050/api",
  timeout: 5000
})

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data)
  } catch (exception) {
    return {
      error: true,
      exception,
    }
  }
}