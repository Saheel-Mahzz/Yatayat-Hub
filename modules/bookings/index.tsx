import SearchBar from "./components/searchBar";
import BusTripCard from "./components/busList";
import BusPagination from "./components/pagination";
import getTrips from "./api/getTrips";

export default async function Trips({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await getTrips(searchParams);

  const currentPage = Number(searchParams?.page) || 1;
  // console.log("bus response", response);
  const allBuses = response?.data?.results;
  console.log("all bueses", allBuses);
  return (
    <div>
      <SearchBar />
      <BusTripCard allBus={allBuses} />
      <BusPagination
        totalCount={response?.data?.count}
        currentPage={currentPage}
      />
      {/* <BusSeatAndTicketUI /> */}
    </div>
  );
}
