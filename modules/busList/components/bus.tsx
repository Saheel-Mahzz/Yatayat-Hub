"use client";

import Model from "@/components/Model";
import React, { useState } from "react";
import CreateBusModel from "./createBusModel";
import { Buses } from "../definitions/buses.definitions";
import { SquarePen } from "lucide-react";

export default function Bus({ row }: { row?: Buses }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Model
      title={row ? "Edit  Bus" : " Create New Bus"}
      open={open}
      setOpen={setOpen}
      withIcon={row ? false : true}
      buttonText={row ? <SquarePen /> : "Add New Bus"}
      variant="outline"
      triggerComponent={
        <CreateBusModel onSuccess={() => setOpen(false)} bus={row} />
      }
    />
  );
}
