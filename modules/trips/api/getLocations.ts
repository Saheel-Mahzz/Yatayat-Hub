import { api } from "@/lib/axios";
import { ILocation } from "../definitions/trips.types";

export async function getLocations() {
  const res = await api.get<ILocation[]>("/locations/");
  return res.data;
}
