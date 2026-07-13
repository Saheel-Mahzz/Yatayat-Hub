import { api } from "@/lib/axios";
import { IDropdown, Trip } from "../definitions/tripList.definitions";
import { IListReponse } from "@/types/apiResponse";

export async function getTripsList() {
  const response = await api.get<IListReponse<Trip>>("/trips/");
  return response;
}

export async function getBusDropdown() {
  const response = await api.get<IDropdown[]>("/buses/dropdown/");
  return response.data;
}
