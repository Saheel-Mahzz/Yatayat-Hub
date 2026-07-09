"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";

interface ICreateBus {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function CreateBusModel({ open, setOpen }: ICreateBus) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Bus</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          <div className="space-y-2">
            <Label>Bus Name</Label>

            <Input placeholder="Ex: Mountain Express" />
          </div>

          <div className="space-y-2">
            <Label>Number Plate</Label>

            <Input placeholder="BA 2 KHA 1234" />
          </div>

          <div className="space-y-2">
            <Label>Bus Type</Label>

            <Input placeholder="Ex: Deluxe / AC / Tourist" />
          </div>

          <div className="space-y-2">
            <Label>Total Seats</Label>

            <Input type="number" placeholder="40" />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Cancel</Button>

            <Button>Create Bus</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
