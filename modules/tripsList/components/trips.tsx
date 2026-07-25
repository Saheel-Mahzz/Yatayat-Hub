"use client";

import Model from "@/components/Model";
import React, { useState } from "react";

import { SquarePen } from "lucide-react";
import { Trip } from "../definitions/tripList.definitions";
import CreateTripModel from "./createTripModel";

export interface IDropdown {
  label: string;
  value: string;
}

export default function Trips({
  row,
  buses,
  locations,
}: {
  row?: Trip;
  buses: IDropdown[];
  locations: IDropdown[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Model
      title={row ? "Edit  Bus" : " Create New Bus"}
      open={open}
      setOpen={setOpen}
      withIcon={row ? false : true}
      buttonText={row ? <SquarePen /> : "Add New Trips"}
      variant="outline"
      triggerComponent={
        <CreateTripModel
          onSuccess={() => setOpen(false)}
          locations={locations}
          buses={buses}
        />
      }
    />
  );
}
