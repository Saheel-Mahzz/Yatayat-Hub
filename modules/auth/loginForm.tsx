"use client";

import { useActionState } from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";
import { loginAction } from "./actions/loginAction";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
  });

  console.log("state", state);

  return (
    <form className="space-y-4" action={formAction}>
      <InputElement
        label="Email"
        name="email"
        placeholder="test@yopmail.com"
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
