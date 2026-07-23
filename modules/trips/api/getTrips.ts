import { api } from "@/lib/axios";
import { IBusTrip } from "../definitions/trips.types";
import { handleApi } from "@/lib/handleApiCall";

export interface IBusTripResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IBusTrip[];
}

export default async function getBuses(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  return handleApi(() =>
    api.get<IBusTripResponse>("/trips/", {
      params: searchParams,
    }),
  );
}
