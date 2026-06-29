import axios from "axios";
import { apiUrl } from "../config/env";

export const api = axios.create({
	baseURL: apiUrl || "http://localhost:8080"
});

api.interceptors.request.use((config) => {
	const token = sessionStorage.getItem("token");

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export const getStoredUser = () => {
	try {
		return JSON.parse(sessionStorage.getItem("user") || "null");
	} catch {
		return null;
	}
};
