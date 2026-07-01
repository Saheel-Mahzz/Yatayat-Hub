import getTrips from "./api/getTrips";
import TripFilters from "./components/tripFilters";
import TripPagination from "./components/pagination";
import TripList from "./components/tripList";

export default async function Trips({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await getTrips(searchParams);

  const currentPage = Number(searchParams?.page) || 1;
  const allTrips = response?.data?.results;
  console.log("all bueses", allTrips);
  return (
    <div>
      <TripFilters />

      <TripList allTrips={allTrips} />
      <TripPagination
        totalCount={response?.data?.count}
        currentPage={currentPage}
      />
    </div>
  );
}
