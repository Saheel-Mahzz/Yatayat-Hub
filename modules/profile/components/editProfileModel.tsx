"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import InputElement from "@/components/inputFields/inputElement";

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

const user: User = {
  first_name: "Saheel",
  last_name: "Mahazz",
  phone_number: "+9779800000000",
  email: "saheel@gmail.com",
};

interface IProfile {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default function ProfileUpdateDialog({ open, setOpen }: IProfile) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
        </DialogHeader>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <InputElement
              type="text"
              label="First Name"
              name="first_name"
              //   defaultValue={user.first_name}
            />

            <InputElement
              type="text"
              label="Last Name"
              name="last_name"
              //   defaultValue={user.last_name}
            />
          </div>

          <InputElement
            type="email"
            label="Email Address"
            name="email"
            disabled
            // defaultValue={user.email}
          />

          <InputElement
            type="tel"
            label="Phone Number"
            name="phone_number"
            disabled
            // defaultValue={user.phone_number}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">Update Profile</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
