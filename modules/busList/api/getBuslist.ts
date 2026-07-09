import { api } from "@/lib/axios";
import { BusResponse } from "../definitions/buses.definitions";

export async function getBuslist() {
  const response = await api.get<BusResponse>("/buses/");
  return response;
}
