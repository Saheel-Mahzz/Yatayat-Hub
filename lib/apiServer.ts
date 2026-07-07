import axios from "axios";
import { cookies } from "next/headers";

export const getAuthApi = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: headers,
  });
};
