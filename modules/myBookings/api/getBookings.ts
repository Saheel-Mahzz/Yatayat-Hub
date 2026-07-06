import { api } from "@/lib/axios";
import { IBookingResponse } from "../definitions/bookings.defination";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzgzNDEzMDkzLCJpYXQiOjE3ODMzMjY2OTMsImp0aSI6ImNjOGVhN2VlOTk5NTQzNDlhZWRhNGExZTQxYjJlY2FkIiwidXNlcl9pZCI6IjEzIn0.a44O5ECXMFMXnQE_v0razQOU8S1visx4jeDHheJZcDQ";

export async function getBookings() {
  //   const response = await api.get("/bookings", {
  //     params: id,
  //   });
  const response = await api.get<IBookingResponse>("/bookings/", {
    headers: {
      Authorization: `Bearer ${accessToken} `,
    },
  });
  return response;
}
