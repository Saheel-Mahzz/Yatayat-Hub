import { api } from "@/lib/axios";
import { IBusTrip } from "../components/busList";

export default async function getBuses() {
  const res = await api.get<IBusTrip>("/buses");
  return res;
}
