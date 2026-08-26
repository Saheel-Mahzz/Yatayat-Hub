import { Column } from "../myBookings";
import { Buses } from "./definitions/buses.definitions";
import { List } from "@/components/list";
import { getBusList } from "./api/getBuslist";
import TripPagination from "../trips/components/pagination";
import { getPageOffset } from "@/components/list/utils/getPageOffSet";
import BusModel from "./components/busModel";

export default async function BusList({
  search,
}: {
  search: {
    [key: string]: string | undefined;
  };
}) {
  const response = await getBusList(search);

  const allBuses = response?.data?.results || [];

  const totalCount = response?.data?.count;

  const columns: Column<Buses>[] = [
    {
      header: "S.N",
      accessorKey: "",
      cell: (_, index) => {
        return <span>{(index || 0) + 1}</span>;
      },
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Number Plate",
      accessorKey: "number_plate",
    },
    {
      header: "Bus Type",
      accessorKey: "bus_type",
    },
    {
      header: "Total Seats",
      accessorKey: "total_seats",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: (row) => {
        return <BusModel row={row} />;
      },
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Buses</h1>

        <BusModel />
      </div>
      <List
        columns={columns}
        rows={allBuses}
        startIndex={getPageOffset(search)}
      />
      <TripPagination totalCount={totalCount} />
    </>
  );
}
