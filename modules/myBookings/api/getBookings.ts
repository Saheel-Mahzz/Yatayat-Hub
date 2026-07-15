import { IBookingResponse } from "../definitions/bookings.defination";
import { getAuthApi } from "@/lib/apiServer";

export async function getBookings(search: {
  [key: string]: string | undefined;
}) {
  const api = await getAuthApi();

  const response = await api.get<IBookingResponse>("/bookings/", {
    params: search,
  });
  return response;
}
