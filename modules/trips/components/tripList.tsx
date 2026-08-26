import { IBusTrip } from "../definitions/trips.types";
import BusTripcard from "./busTripCard";

export default function TripList({ allTrips }: { allTrips: IBusTrip[] }) {
  if (!allTrips || allTrips.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No buses found for the selected criteria.
      </div>
    );
  }
  return allTrips.map((trip) => <BusTripcard trip={trip} key={trip.id} />);
}
