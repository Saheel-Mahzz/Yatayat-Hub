"use client";
import { Button } from "@/components/ui/button";
import InputElement from "@/components/inputFields/inputElement";
import { useActionState, useEffect } from "react";
import busCreateAction from "../actions/busListAction";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Buses } from "../definitions/buses.definitions";
import { SelectElement } from "@/components/select";
import { BUS_TYPE } from "../constants/busType.const";

export default function CreateBusModel({
  bus,
  onSuccess,
}: {
  bus?: Buses;
  onSuccess: () => void;
}) {
  const router = useRouter();
  const initialState = {
    message: "",
    data: { ...bus },
    error: null,
    success: false,
  };
  const [state, formAction, isPending] = useActionState(
    busCreateAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      onSuccess?.();
      router.refresh();
    }
  }, [state]);

  const buttonText = isPending
    ? bus
      ? "Editing.."
      : "Creating.."
    : bus
      ? "Edit Bus"
      : "Create Bus";

  return (
    <form action={formAction}>
      <div className="space-y-5 pt-4">
        <InputElement
          placeholder="Ex: Mountain Express"
          label="Bus Name"
          name="name"
          type="text"
          err={state?.error?.name}
          defaultValue={state?.data?.name}
        />
        <InputElement
          placeholder="BA 2 KHA 1234"
          label="Number Plate"
          name="number_plate"
          type="text"
          err={state?.error?.number_plate}
          defaultValue={state?.data?.number_plate}
        />

        <SelectElement
          options={BUS_TYPE}
          placeholder="Select a bus type.."
          label="Bus Type"
          name="bus_type"
          err={state?.error?.bus_type}
        />
        <InputElement
          placeholder="40"
          label="Total Seats"
          name="total_seats"
          type="text"
          err={state?.error?.total_seats}
          defaultValue={state?.data?.total_seats}
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" type="button">
            Cancel
          </Button>

          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="animate-spin" size={18} />}
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
}
