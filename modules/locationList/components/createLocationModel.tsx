"use client";
import { Button } from "@/components/ui/button";
import InputElement from "@/components/inputFields/inputElement";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import locationCreateAction from "../actions/locationAction";
const initialState = {
  message: "",
  data: null,
  error: null,
  success: false,
};

export default function CreateLocationModel() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    locationCreateAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.message("Location Created Successfully!");
      router.refresh();
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="space-y-5 pt-4">
        <InputElement
          placeholder="Kathmandu"
          label="Location Name"
          name="name"
          type="text"
          err={state?.error?.name}
          // value={state?.data?.name || ""}
        />

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" type="button">
            Cancel
          </Button>

          <Button type="submit">
            {isPending ? "Creating.." : "Create Location"}
          </Button>
        </div>
      </div>
    </form>
  );
}
