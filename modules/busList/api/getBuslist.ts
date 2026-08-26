import { api } from "@/lib/axios";
import { Buses } from "../definitions/buses.definitions";
import { IListReponse } from "@/types/apiResponse";

export async function getBusList(searchParams: {
  [key: string]: string | undefined;
}) {
  const response = await api.get<IListReponse<Buses>>("/buses/", {
    params: searchParams,
  });
  return response;
}
