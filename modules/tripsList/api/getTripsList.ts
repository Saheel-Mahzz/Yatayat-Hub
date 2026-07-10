import { api } from "@/lib/axios";
import { Trip } from "../definitions/tripList.definitions";
import { IListReponse } from "@/types/apiResponse";

export async function getTripsList() {
  const response = await api.get<IListReponse<Trip>>("/trips/");
  return response;
}
