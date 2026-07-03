"use client";

import { useActionState, useEffect } from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";
import { loginAction } from "./actions/loginAction";
import { toast } from "sonner";

export default function LoginForm({
  onAuthSuccess,
}: {
  onAuthSuccess: () => void;
}) {
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
  });

  console.log("state", state);

  useEffect(() => {
    if (state.success) {
      toast.success("Login Successfull!");
      onAuthSuccess();
    }
  }, [state, onAuthSuccess]);
  return (
    <form className="space-y-4" action={formAction}>
      <InputElement
        label="Email"
        name="email"
        placeholder="test@yopmail.com"
        type="email"
        err={state?.error?.email}
      />
      <PasswordElement
        label="Password"
        name="password"
        placeholder="*******"
        err={state?.error?.password}
      />
      <Button className="w-full mt-2 cursor-pointer">
        {isPending ? "Submitting..." : "Login & Continue"}
      </Button>
    </form>
  );
}
