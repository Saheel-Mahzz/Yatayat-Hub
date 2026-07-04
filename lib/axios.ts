import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    // 1. Local storage bata token string line (e.g., "access_token")
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : null;

    // 2. Yedi token exist garchha bhane Headers configure garne
    if (token) {
      // Django DRF ko standard JWT dynamic standard header name format standard 'Bearer <token>' hunchha
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 3. Modifed config return garna pardaincha
    return config;
  },
  (error) => {
    // Kehi gari request pathauda error aayo bhane forward handine
    return Promise.reject(error);
  },
);
