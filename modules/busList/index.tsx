import { getBuslist } from "./api/getBuslist";
import { Column } from "../myBookings";
import { Buses } from "./definitions/buses.definitions";
import { List } from "@/components/list";
import CreateBusbutton from "./components/createBusbutton";
import CreateButton from "@/components/createButton";
import CreateBusModel from "./components/createBusModel";

export default async function BusList() {
  const response = await getBuslist();

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
    </>
  );
}
