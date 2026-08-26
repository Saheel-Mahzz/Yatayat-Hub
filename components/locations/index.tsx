import { getLocations } from "@/modules/trips/api/getLocations";
import React from "react";
import Select, { ILocation } from "./components/locationSelect";

interface ILocationSelect {
  name: string;
  label: string;
  onSelect: (value: ILocation) => void;
  disable: ILocation | null;
  value: ILocation | null;
}

export default async function LocationSelect({
  disable,
  label,
  name,
  onSelect,
  value,
}: ILocationSelect) {
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
        label={label}
        locations={locations}
        name={name}
        placeholder="From Destination"
        disable={disable}
        onSelect={onSelect}
        value={value}
      />
    </div>
  );
}
