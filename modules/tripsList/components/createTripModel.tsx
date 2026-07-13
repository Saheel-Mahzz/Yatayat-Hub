"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useState } from "react";
import tripCreateAction from "../actions/createTripAction";
import InputElement from "@/components/inputFields/inputElement";
import SearchFields from "@/modules/trips/components/search/components/searchFields";

export interface IDropdown {
  label: string;
  value: string;
}

interface ICreateTrip {
  locations: IDropdown[];
  buses: IDropdown[];
}

const initialState = {
  success: false,
  error: null,
  message: "",
  data: null,
};

export default function CreateTripModel({ locations, buses }: ICreateTrip) {
  const [state, formAction, isPending] = useActionState(
    tripCreateAction,
    initialState,
  );
  const [fromLocation, setFromLocation] = useState<IDropdown | null>(null);
  const [toLocation, setToLocation] = useState<IDropdown | null>(null);
  const [selectedBus, setSelectedBus] = useState<IDropdown | null>(null);

  return (
    <form action={formAction}>
      <div className="space-y-5 pt-4">
        <div className="grid grid-cols-2 gap-4">
          <SearchFields
            disable={toLocation}
            label="From Location"
            locations={locations}
            name="from_location"
            onSelect={setFromLocation}
            placeholder="Select "
            value={fromLocation}
          />

          <SearchFields
            disable={fromLocation}
            label="To Location"
            locations={locations}
            name="to_location"
            onSelect={setToLocation}
            placeholder="Select "
            value={toLocation}
          />
        </div>

        <SearchFields
          label="Choose Bus"
          locations={buses}
          name="name"
          placeholder="Choose a bus "
          value={selectedBus}
          onSelect={setSelectedBus}
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date</Label>

            <Input type="date" name="date" />
          </div>

          <div className="space-y-2">
            <Label>Time</Label>

            <Input type="time" name="time" />
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

          <Button>{isPending ? "Creating.." : "Create Trip"}</Button>
        </div>
      </div>
    </form>
  );
}
