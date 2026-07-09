"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import CreateBusModel from "./createBusModel";

export default function CreateBusbutton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Bus
      </Button>
      <CreateBusModel open={open} setOpen={setOpen} />
    </>
  );
}
