import { api } from "@/lib/axios";
import { IBusTrip } from "../definitions/trips.types";

export interface IBusTripResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IBusTrip[];
}
export default async function getBuses(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  // console.log("search", searchParams);
  const res = await api.get<IBusTripResponse>("/trips", {
    params: searchParams,
  });
  return res;
}
