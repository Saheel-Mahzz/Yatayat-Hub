import getTrips from "./api/getTrips";
import TripFilters from "./components/tripFilters";
import TripPagination from "./components/pagination";
import TripList from "./components/tripList";
import { getLocations } from "./api/getLocations";

export default async function Trips({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await getTrips(searchParams);

  const [tripsRes, locationsRes] = await Promise.all([
    getTrips(searchParams),
    getLocations(),
  ]);

  const currentPage = Number(searchParams?.page) || 1;
  const allTrips = response?.data?.results;

  const locations = locationsRes?.map((loc) => {
    return {
      label: loc?.name,
      value: loc?.id,
    };
  });

  return (
    <div>
      <TripFilters locations={locations} />

      <TripList allTrips={allTrips} />
      <TripPagination
        totalCount={response?.data?.count}
        currentPage={currentPage}
      />
    </div>
  );
}
