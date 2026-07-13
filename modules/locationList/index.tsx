import { Column } from "../myBookings";
import { List } from "@/components/list";
import CreateButton from "@/components/createButton";
import { ILocation } from "./definitions/locations.definitions";
import { getLocationlist } from "./api/getLocationlist";
import CreateLocationModel from "./components/createLocationModel";

export default async function LocationList() {
  const response = await getLocationlist();

  const allLocations = response?.data || [];
  // const totalCount = response?.data?.count;

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
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Locations</h1>
        <CreateButton
          addButtonText="Add Location"
          modelTitle="Create New Location"
        >
          <CreateLocationModel />
        </CreateButton>
      </div>
      <List columns={columns} rows={allLocations} />
    </>
  );
}
