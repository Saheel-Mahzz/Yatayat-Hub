"use client";
import { Button } from "@/components/ui/button";

import { useActionState, useEffect, useState } from "react";
import tripCreateAction from "../actions/createTripAction";
import InputElement from "@/components/inputFields/inputElement";
import SearchFields from "@/modules/trips/components/search/components/searchFields";
import { Loader2 } from "lucide-react";
import DateField from "@/modules/trips/components/search/components/dateField";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Trip } from "../definitions/tripList.definitions";

export interface IDropdown {
  label: string;
  value: string;
}

interface ICreateTrip {
  locations: IDropdown[];
  buses: IDropdown[];
  trips?: Trip;
  onSuccess: () => void;
}

export default function CreateTripModel({
  trips,
  locations,
  buses,
  onSuccess,
}: ICreateTrip) {
  const initialState = {
    success: false,
    error: null,
    message: "",
    data: { ...trips },
  };
  const [state, formAction, isPending] = useActionState(
    tripCreateAction,
    initialState,
  );
  const [fromLocation, setFromLocation] = useState<string | null>(null);
  const [toLocation, setToLocation] = useState<string | null>(null);
  const [selectedBus, setSelectedBus] = useState<string | null>(null);

  console.log("seelcted location", fromLocation);

  const buttonText = isPending
    ? trips
      ? "Editing"
      : "Creating.."
    : trips
      ? "Edit Trip"
      : "Create Trip";
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.refresh();
      toast.success(state.message);
      onSuccess?.();
    }
  }, [state.success]);

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
            defaultValue={state?.data?.from_location}
          />

          <SearchFields
            disable={fromLocation}
            label="To Location"
            locations={locations}
            name="to_location"
            onSelect={setToLocation}
            placeholder="Select "
            value={toLocation}
            defaultValue={state?.data?.to_location}
          />
        </div>

        <SearchFields
          label="Choose Bus"
          locations={buses}
          name="bus"
          placeholder="Choose a bus "
          value={selectedBus}
          onSelect={setSelectedBus}
          defaultValue={state?.data?.bus?.id || state?.data?.bus}
        />

        <div className="grid grid-cols-2 gap-4">
          <DateField name="date" defaultValue={state?.data?.date} />
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
