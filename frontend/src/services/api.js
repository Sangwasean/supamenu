import axios from "axios";
import { API_BASE_URL } from "../config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // If using cookies
});

// Set JWT token in headers
export const setAuthToken = (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

// Example login request
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  const { token } = response.data;
  setAuthToken(token); // Store token
  localStorage.setItem("token", token); // Persist token
  return response.data;
};
