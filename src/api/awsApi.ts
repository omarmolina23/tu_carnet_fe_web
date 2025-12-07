// src/api/biometricApi.ts
import axios from "axios";

const biometricApi = axios.create({
  baseURL: import.meta.env.VITE_AWS_API_URL,
  timeout: 15000, // suele ser más lenta
});

export default biometricApi;
