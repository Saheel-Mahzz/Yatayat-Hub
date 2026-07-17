"use client";
import InputElement from "@/components/inputFields/inputElement";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import changePasswordAction from "../actions/changePasswordAction";
import { Loader2 } from "lucide-react";

export function ChangePasswordDialog() {
  const initialState = {
    success: false,
    error: null,
    message: "",
    data: null,
  };
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    initialState,
  );
  return (
    <form className="space-y-5" action={formAction}>
      <InputElement
        type="password"
        label="Current Password"
        name="current_password"
        placeholder="Enter current password.."
        err={state?.error?.current_password}
      />
      <InputElement
        type="password"
        label="New Password"
        name="new_password"
        placeholder="Enter New password.."
        err={state?.error?.new_password}
      />
      <InputElement
        type="password"
        label="Confirm New Password"
        name="confirm_password"
        placeholder="Confirm new password.."
        err={state?.error?.confirm_password}
      />
      <Button type="submit" className="cursor-pointer" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="animate-spin" size={16} />
            Confirming..
          </>
        ) : (
          "Confirm"
        )}
      </Button>
    </form>
  );
}
