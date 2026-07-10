import { api } from "@/lib/axios";
import { Buses } from "../definitions/buses.definitions";
import { IListReponse } from "@/types/apiResponse";

export async function getBuslist() {
  const response = await api.get<IListReponse<Buses>>("/buses/");
  return response;
}
