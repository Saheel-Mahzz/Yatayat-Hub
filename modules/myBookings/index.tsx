import React from "react";
import { getBookings } from "./api/getBookings";
import List from "@/components/list";

export default async function MyBookings() {
  const response = await getBookings();
  const allBooking = response?.data?.results || [];
  return (
    // <div className="max-w-5xl mx-auto">
    //   List of bookings..
    //   {allBooking.map((booking) => (
    //     <div key={booking.booked_at}>{booking.seat_number}</div>
    //   ))}
    // </div>

    <List />
  );
}
