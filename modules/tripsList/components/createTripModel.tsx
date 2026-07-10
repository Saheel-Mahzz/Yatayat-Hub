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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState } from "react";
import tripCreateAction from "../actions/createTripAction";
import InputElement from "@/components/inputFields/inputElement";

interface ICreateTrip {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function CreateTripModel({ open, setOpen }: ICreateTrip) {
  const [state, formAction, isPending] = useActionState(tripCreateAction);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Trip</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From Location</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select departure" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="kathmandu">Kathmandu</SelectItem>

                  <SelectItem value="pokhara">Pokhara</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>To Location</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="pokhara">Pokhara</SelectItem>

                  <SelectItem value="chitwan">Chitwan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Select Bus</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose bus" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="1">
                  Mountain Express - BA 2 KHA 1234
                </SelectItem>

                <SelectItem value="2">
                  Deluxe Traveller - BA 3 PA 2222
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>

              <Input type="date" />
            </div>

            <div className="space-y-2">
              <Label>Time</Label>

              <Input type="time" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputElement
              type="number"
              placeholder="800"
              label="Price"
              name="price"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Cancel</Button>

            <Button>Create Trip</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
