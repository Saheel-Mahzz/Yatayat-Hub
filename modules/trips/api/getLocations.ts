import { api } from "@/lib/axios";
import { ILocationResponse } from "../definitions/trips.types";

export async function getLocations() {
  const res = await api.get<ILocationResponse>("/locations/");
  return res.data;
}
