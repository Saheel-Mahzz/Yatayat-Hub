import { api } from "@/lib/axios";

export async function getBookings(id: string) {
  const response = await api.get("/bookings", {
    params: id,
  });
  return;
}
