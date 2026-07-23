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

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//     }
//   },
// );

// export const getAuthApi = () => {
//   const cookieStore = cookies();
//   const token = cookieStore.get("access_token")?.value;

//   // 1. Base headers object tayar parne
//   const headers: Record<string, string> = {};

//   // 2. Yedi cookie ma token bhetiyo bhane dynamic Authorization header thapne
//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   // 3. Dynamic configurations sahita fresh Axios instance return garne
//   return axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     headers: headers,
//   });
// };

// export const getAuthApi = async () => {
//   // 2. cookies() ko madait ma await thapeko
//   const cookieStore = await cookies();
//   const token = cookieStore.get("access_token")?.value;

//   const headers: Record<string, string> = {};

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   return axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     headers: headers,
//   });
// };
