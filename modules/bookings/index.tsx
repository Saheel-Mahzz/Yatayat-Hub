import SearchBar from "./components/searchBar";
import getBuses from "./api/getBuses";
import BusTripCard from "./components/busList";

export default async function Bookings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await getBuses(searchParams);
  console.log("bus response", response);
  const allBuses = response?.data;
  console.log("all bueses", allBuses);
  return (
    <div>
      <SearchBar />
      <BusTripCard allBus={allBuses} />
    </div>
  );
}
