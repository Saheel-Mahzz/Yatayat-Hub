import { api } from "@/lib/axios";

export async function getTripDetails(tripId: string) {
  const response = await api.get(`/trips/${tripId}`);
  return response.data;
}
