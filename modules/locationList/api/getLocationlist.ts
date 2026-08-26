import { api } from "@/lib/axios";
import { ILocation } from "../definitions/locations.definitions";

export async function getLocationlist() {
  const response = await api.get<ILocation[]>("/locations/");
  return response;
}
