import getTrips from "./api/getTrips";
import TripFilters from "./components/tripFilters";
import TripPagination from "./components/pagination";
import TripList from "./components/tripList";
import { getLocations } from "./api/getLocations";
import SecondaryFilters from "./components/secondaryFilters";

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
  const totalCount = tripsRes?.data?.count || 0;

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
      <div className="grid grid-cols-12 gap-6 w-full max-w-5xl mx-auto">
        <div className="col-span-4">
          <SecondaryFilters />
        </div>
        <div
          className="col-span-8 space-y-3
        "
        >
          <TripList allTrips={allTrips} />
        </div>
      </div>
      <TripPagination totalCount={totalCount} />
    </div>
  );
}
