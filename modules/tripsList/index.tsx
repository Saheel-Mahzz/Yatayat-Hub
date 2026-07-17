import { getBusDropdown, getTripsList } from "./api/getTripsList";
import { Column } from "../myBookings";
import { Trip } from "./definitions/tripList.definitions";
import { List } from "@/components/list";
import CreateTripModel from "./components/createTripModel";
import CreateButton from "@/components/createButton";
import { getLocations } from "../trips/api/getLocations";
import TripPagination from "../trips/components/pagination";

export default async function TripsList({
  search,
}: {
  search: {
    [key: string]: string | undefined;
  };
}) {
  const [tripsRes, locationsRes, busRes] = await Promise.all([
    getTripsList(search),
    getLocations(),
    getBusDropdown(),
  ]);

  const locations =
    (Array.isArray(locationsRes) &&
      locationsRes?.map((loc) => {
        return {
          label: loc?.name,
          value: loc?.id,
        };
      })) ||
    [];

  const buses =
    (Array.isArray(busRes) &&
      busRes?.map((loc) => {
        return {
          label: loc?.name,
          value: loc?.id,
        };
      })) ||
    [];

  const allTrips = tripsRes?.data?.results || [];
  const total = tripsRes?.data?.count;

  const columns: Column<Trip>[] = [
    {
      header: "S.N",
      accessorKey: "",
      cell: (_, index) => {
        return <span>{(index || 0) + 1}</span>;
      },
    },
    {
      header: "Bus Name",
      accessorKey: "bus.name",
    },
    {
      header: "To Location",
      accessorKey: "to_location",
    },
    {
      header: "From Location",
      accessorKey: "from_location",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trips</h1>

        <CreateButton addButtonText="Add Trip" modelTitle="Create New trip">
          <CreateTripModel locations={locations} buses={buses} />
        </CreateButton>
      </div>
      <List columns={columns} rows={allTrips} />
      <TripPagination totalCount={total} />
    </>
  );
}
