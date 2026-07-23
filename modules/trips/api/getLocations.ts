import { api } from "@/lib/axios";
import { ILocation } from "../definitions/trips.types";

export async function getLocations() {
  try {
    const res = await api.get<ILocation[]>("/locatiions/");
    return res.data;
  } catch (err) {
    return [];
  }
}
