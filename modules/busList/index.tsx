import { Column } from "../myBookings";
import { Buses } from "./definitions/buses.definitions";
import { List } from "@/components/list";
import CreateButton from "@/components/createButton";
import CreateBusModel from "./components/createBusModel";
import { getBusList } from "./api/getBuslist";
import TripPagination from "../trips/components/pagination";

export default async function BusList({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const response = await getBusList(searchParams);

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
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Buses</h1>
        {/* <CreateBusbutton /> */}
        <CreateButton addButtonText="Add Bus" modelTitle="Create New Bus">
          <CreateBusModel />
        </CreateButton>
      </div>
      <List columns={columns} rows={allBuses} />
      <TripPagination totalCount={totalCount} />
    </>
  );
}
