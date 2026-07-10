import { getLocations } from "@/modules/trips/api/getLocations";
import React from "react";
import Select from "./components/locationSelect";

export default async function LocationSelect() {
  const locationRes = await getLocations();

  const locations =
    (Array.isArray(locationRes) &&
      locationRes?.map((loc) => {
        return {
          label: loc?.name,
          value: loc?.id,
        };
      })) ||
    [];

  return (
    <div>
      <Select
        label="From Location"
        locations={locations}
        name="from_location"
        placeholder="From Destination"
      />
    </div>
  );
}
