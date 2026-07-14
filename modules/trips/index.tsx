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
  const [tripsRes, locationsRes] = await Promise.all([
    getTrips(searchParams),
    getLocations(),
  ]);

  const allTrips = tripsRes?.data?.results || [];
  const totalCount = tripsRes?.data?.count;

  const locations =
    (Array.isArray(locationsRes) &&
      locationsRes?.map((loc) => {
        return {
          label: loc?.name,
          value: loc?.id,
        };
      })) ||
    [];

  return (
    <div className="space-y-4">
      <TripFilters locations={locations} />
      <TripList allTrips={allTrips} />
      <TripPagination totalCount={totalCount} />
    </div>
  );
}
