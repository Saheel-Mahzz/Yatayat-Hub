import { api } from "@/lib/axios";
import { IBusTrip } from "../components/busList";
export default async function getBuses(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  // console.log("search", searchParams);
  const res = await api.get<IBusTrip[]>("/trips", { params: searchParams });
  return res;
}
