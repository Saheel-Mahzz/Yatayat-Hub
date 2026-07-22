"use client";
import InputElement from "@/components/inputFields/inputElement";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import changePasswordAction from "../actions/changePasswordAction";
import { Loader2 } from "lucide-react";
import PasswordElement from "@/components/inputFields/passportElement";
import { toast } from "sonner";

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

  useEffect(() => {
    if (state.success) {
      toast.success(state?.message);
    }
  }, [state.success]);
  return (
    <form className="space-y-5" action={formAction}>
      <PasswordElement
        label="Current Password"
        name="current_password"
        placeholder="Enter current password.."
        defaultValue={state?.data?.current_password}
        err={state?.error?.current_password}
      />
      <PasswordElement
        label="New Password"
        name="new_password"
        defaultValue={state?.data?.new_password}
        placeholder="Enter New password.."
        err={state?.error?.new_password}
      />
      <PasswordElement
        label="Confirm New Password"
        name="confirm_password"
        placeholder="Confirm new password.."
        defaultValue={state?.data?.confirm_password}
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
