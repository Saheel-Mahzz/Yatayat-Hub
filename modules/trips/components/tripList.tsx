import { IBusTrip } from "../definitions/trips.types";
import BusTripcard from "./busTripcard";

export default function TripList({ allTrips }: { allTrips: IBusTrip[] }) {
  if (!allTrips || allTrips.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No buses found for the selected criteria.
      </div>
    );
  }
  return allTrips.map((trip) => <BusTripcard trip={trip} key={trip.id} />);
}
