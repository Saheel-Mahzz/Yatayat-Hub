"use client";
import { useActionState, useEffect } from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";
import { registerAction } from "./actions/registerAction";
import { toast } from "sonner";
import useAuth from "@/context/authContext";

export default function RegisterForm({
  onAuthSuccess,
}: {
  onAuthSuccess: () => void;
}) {
  const [state, formAction, isPending] = useActionState(registerAction, {
    success: false,
    message: "",
  });
  const { register } = useAuth();
  useEffect(() => {
    if (state.success) {
      toast.success("User Registered successfully!");
      register(state.data.access);
      onAuthSuccess();
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputElement
            label="First Name"
            name="first_name"
            placeholder="Saheel"
            type="text"
            err={state?.error?.first_name}
          />
          <InputElement
            label="Last Name"
            name="last_name"
            placeholder="Maharjan"
            type="text"
            err={state?.error?.last_name}
          />
        </div>
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
        <Button className="w-full mt-2">
          {isPending ? "Creating..." : "Create Account"}
        </Button>
      </div>
    </form>
  );
}
