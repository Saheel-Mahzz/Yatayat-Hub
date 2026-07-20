"use client";
import { Button } from "@/components/ui/button";

import { useActionState, useState } from "react";
import tripCreateAction from "../actions/createTripAction";
import InputElement from "@/components/inputFields/inputElement";
import SearchFields from "@/modules/trips/components/search/components/searchFields";
import { Loader2 } from "lucide-react";
import DateField from "@/modules/trips/components/search/components/dateField";

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
  const [fromLocation, setFromLocation] = useState<string | null>(null);
  const [toLocation, setToLocation] = useState<string | null>(null);
  const [selectedBus, setSelectedBus] = useState<string | null>(null);

  const buttonText = isPending ? "Creating.." : "Create Trip";

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
          <DateField />
          <InputElement
            type="time"
            label="Time"
            name="time"
            defaultValue={state?.data?.time}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputElement
            type="number"
            placeholder="800"
            label="Price"
            name="price"
            defaultValue={state?.data?.price}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline">Cancel</Button>

          <Button>
            {isPending && <Loader2 className="animate-spin" size={16} />}
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
}
