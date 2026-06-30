import React from "react";
import { getTripDetails } from "./api/getTripDetails";
import Seats from "./components/tripSeats";

export default async function TripDetails({ tripId }: { tripId: string }) {
  const tripDetails = await getTripDetails(tripId);
  return <Seats tripDetails={tripDetails} />;
}
