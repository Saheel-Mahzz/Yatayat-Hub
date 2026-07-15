"use client";
import { Button } from "@/components/ui/button";
import InputElement from "@/components/inputFields/inputElement";
import { useActionState, useEffect } from "react";
import editProfileAction from "../actions/editProfile";
import { User } from "../definitions/profile.definitions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ProfileUpdateModal({ user }: { user: User }) {
  const router = useRouter();
  const initialState = {
    success: false,
    error: null,
    message: "",
    data: { ...user },
  };
  const [state, formAction, isPending] = useActionState(
    editProfileAction,
    initialState,
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("Profile Updated Sucessfully!");
      router.refresh();
    }
  }, [state.success]);
  return (
    <form className="space-y-5" action={formAction}>
      <div className="grid grid-cols-2 gap-4">
        <InputElement
          type="text"
          label="First Name"
          name="first_name"
          defaultValue={state.data.first_name}
          err={state?.error?.first_name}
        />

        <InputElement
          type="text"
          label="Last Name"
          name="last_name"
          defaultValue={state.data.last_name}
          err={state?.error?.last_name}
        />
      </div>

      <InputElement
        type="email"
        label="Email Address"
        name="email"
        disabled={true}
        defaultValue={state.data.email}
        err={state?.error?.email}
      />

      <InputElement
        type="tel"
        label="Phone Number"
        name="phone_number"
        disabled={true}
        defaultValue={state.data.phone_number}
        err={state?.error?.phone_number}
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>

        <Button type="submit">
          {isPending ? "Updating.." : "Update Profile"}
        </Button>
      </div>
    </form>
  );
}
