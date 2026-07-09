import { getAuthApi } from "@/lib/apiServer";
import { api } from "@/lib/axios";
import { UserResponse } from "../definitions/profile.definitions";

export async function getProfile() {
  const api = await getAuthApi();
  const response = await api.get<UserResponse>("/profile/me/");
  return response;
}
