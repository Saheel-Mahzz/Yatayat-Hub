"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
import ProfileUpdateDialog from "./editProfileModel";

export default function EditProfileButton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Pencil className="mr-2 h-4 w-4" />
        Edit Profile
      </Button>
      <ProfileUpdateDialog open={open} setOpen={setOpen} />
    </>
  );
}
