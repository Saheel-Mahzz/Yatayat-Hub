"use client";

import Model from "@/components/Model";
import { SquarePen } from "lucide-react";
import LocationForm from "./locationForm";
import { useState } from "react";
import { ILocation } from "../definitions/locations.definitions";

export default function LocationModel({ row }: { row?: ILocation }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Model
      title={row ? "Edit  Bus" : " Create New Bus"}
      open={open}
      setOpen={setOpen}
      withIcon={row ? false : true}
      buttonText={row ? <SquarePen /> : "Add New Location"}
      variant="outline"
      triggerComponent={
        <LocationForm onSuccess={() => setOpen(false)} location={row} />
      }
    />
  );
}
