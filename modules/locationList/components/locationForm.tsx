"use client";
import { Button } from "@/components/ui/button";
import InputElement from "@/components/inputFields/inputElement";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import locationCreateAction from "../actions/locationAction";
import { ILocation } from "../definitions/locations.definitions";
import { Loader2 } from "lucide-react";

export default function LocationForm({
  onSuccess,
  location,
}: {
  location?: ILocation;
  onSuccess: () => void;
}) {
  const router = useRouter();
  const initialState = {
    message: "",
    data: { ...location },
    error: null,
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    locationCreateAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      router.refresh();
      onSuccess?.();
      return;
    }
    if (state?.error) {
      toast.error(state.message);
    }
  }, [state]);

  const buttonText = location
    ? isPending
      ? "Editing.."
      : "Edit Location"
    : isPending
      ? "Creting.."
      : "Create Location";

  return (
    <form action={formAction}>
      <div className="space-y-5 pt-4">
        <InputElement
          placeholder="Kathmandu"
          label="Location Name"
          name="name"
          type="text"
          err={state?.error?.name}
          defaultValue={state?.data?.name}
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
