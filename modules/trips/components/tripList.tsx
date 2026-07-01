import React from "react";
import BusTripCardd from "./busTripCard";
import { IBusTrip } from "./busList";

export default function TripList({ allTrips }: { allTrips: IBusTrip[] }) {
  if (!allTrips || allTrips.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No buses found for the selected criteria.
      </div>
    );
  }
  return allTrips.map((trip) => <BusTripCardd trip={trip} key={trip.id} />);
}
