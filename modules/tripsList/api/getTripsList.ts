import { api } from "@/lib/axios";
import { TripResponse } from "../definitions/tripList.definitions";

export async function getTripsList() {
  const response = await api.get<TripResponse>("/trips/");
  return response;
}
