"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateTripModel from "./createTripModel";

export default function AddTripButton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Create Trip
      </Button>
      <CreateTripModel open={open} setOpen={setOpen} />
    </>
  );
}
