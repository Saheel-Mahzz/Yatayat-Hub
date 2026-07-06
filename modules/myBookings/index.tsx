import React from "react";
import { getBookings } from "./api/getBookings";
import { List } from "@/components/list";
export interface Column {
  header: string;
  accessorKey: string;
}

export default async function MyBookings() {
  const response = await getBookings();
  const allBooking = response?.data?.results || [];
  console.log("al booking", allBooking);

  const columns: Column[] = [
    {
      header: "User Name",
      accessorKey: "user.first_name",
    },
    {
      header: "Bus Name",
      // accessorKey: "bus.name",//check
      accessorKey: "trip.bus.name",
    },
    {
      header: "Number Plate",
      accessorKey: "trip.bus.number_plate",
    },
    {
      header: "Seat Number",
      accessorKey: "seat_number",
    },

    {
      header: "Email",
      accessorKey: "user.email",
    },
    {
      header: "From Destination",
      accessorKey: "trip.from_location",
    },
    {
      header: "To Destination",
      accessorKey: "trip.to_location",
    },
  ];
  return (
    // <div className="max-w-5xl mx-auto">
    //   List of bookings..
    //   {allBooking.map((booking) => (
    //     <div key={booking.booked_at}>{booking.seat_number}</div>
    //   ))}
    // </div>
    <div className="  max-w-5xl ">
      <List columns={columns} rows={allBooking} />
    </div>
  );
}
