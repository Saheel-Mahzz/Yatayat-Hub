import { Column } from "../myBookings";
import { List } from "@/components/list";
import { ILocation } from "./definitions/locations.definitions";
import { getLocationlist } from "./api/getLocationlist";
import LocationModel from "./components/locationModel";

export default async function LocationList() {
  const response = await getLocationlist();

  const allLocations = response?.data || [];

  const columns: Column<ILocation>[] = [
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
      header: "Actions",
      accessorKey: "actions",
      cell: (row) => {
        return <LocationModel row={row} />;
      },
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Locations</h1>

        <LocationModel />
      </div>
      <List columns={columns} rows={allLocations} />
    </>
  );
}
