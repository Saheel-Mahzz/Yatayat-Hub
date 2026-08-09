import React from "react";
import { getBookings } from "./api/getBookings";
import { List } from "@/components/list";

import ViewTicket from "./components/viewTicket";
import { IBooking } from "./definitions/bookings.defination";
import TripPagination from "../trips/components/pagination";
import { getPageOffset } from "@/components/list/utils/getPageOffSet";
import { Badge } from "@/components/ui/badge";
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
      accessorKey: "sn",
      cell: (row, index) => <span>{(index ?? 0) + 1}</span>,
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
      cell: (row) => {
        const seats = row?.seats;
        if (!seats) return "-";
        return seats.map((seat, index) => (
          <Badge variant="outline" key={index} className="ml-2">
            {seat}
          </Badge>
        ));
      },
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
      <List
        columns={columns}
        rows={allBooking}
        startIndex={getPageOffset(search)}
      />
      <TripPagination totalCount={totalCount} />
    </div>
  );
}
