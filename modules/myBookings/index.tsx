import React from "react";
import { getBookings } from "./api/getBookings";
import { List } from "@/components/list";

import ViewTicket from "./components/viewTicket";
import { IBooking } from "./definitions/bookings.defination";
import TripPagination from "../trips/components/pagination";
export interface Column<T> {
  header: string;
  accessorKey: keyof T | string;
  cell?: (row: T, index?: number) => React.ReactNode;
}

export default async function MyBookings({
  search,
}: {
  search: {
    [key: string]: string | undefined;
  };
}) {
  const response = await getBookings(search);

  const totalCount = response?.data?.count || 0;
  const allBooking = response?.data?.results || [];

  const columns: Column<IBooking>[] = [
    {
      header: "S.N.",
      accessorKey: "sn", // Yesle farak pardaina, just key ko lagi
      cell: (row, index) => <span>{(index ?? 0) + 1}</span>, // Index dynamic pass garchu hami
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

    // {
    //   header: "Email",
    //   accessorKey: "user.email",
    // },
    {
      header: "From Destination",
      accessorKey: "trip.from_location",
    },
    {
      header: "To Destination",
      accessorKey: "trip.to_location",
    },
    {
      header: "Actions",
      accessorKey: "",
      cell: (row) => {
        return <ViewTicket ticket={row} />;
      },
    },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto ">
      <List columns={columns} rows={allBooking} />
      <TripPagination totalCount={totalCount} />
    </div>
  );
}
