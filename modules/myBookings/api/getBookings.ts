import { IBookingResponse } from "../definitions/bookings.defination";
import { getAuthApi } from "@/lib/apiServer";

export async function getBookings() {
  const api = await getAuthApi();

  const response = await api.get<IBookingResponse>("/bookings/");
  return response;
}
