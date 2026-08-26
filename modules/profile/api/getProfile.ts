import { getAuthApi } from "@/lib/apiServer";
import { User } from "../definitions/profile.definitions";

export async function getProfile() {
  const api = await getAuthApi();
  const response = await api.get<User>("/profile/me/");
  return response;
}
