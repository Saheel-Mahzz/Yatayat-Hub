"use client";
import { useActionState, useEffect } from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";
import { registerAction } from "./actions/registerAction";
import { toast } from "sonner";
import useAuth from "@/context/authContext";
import { Loader2 } from "lucide-react";

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
    <form action={formAction} noValidate>
      <div className="space-y-5">
        {/* Name Section */}
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
          label="Email Address"
          name="email"
          placeholder="test@yopmail.com"
          type="email"
          err={state?.error?.email}
        />

        <InputElement
          label="Phone Number"
          type="tel"
          name="phone_number"
          placeholder="+977 98XXXXXXXX"
          err={state?.error?.phone_number}
        />

        {/* Password Group */}
        <div className="grid grid-cols-2 gap-4">
          <PasswordElement
            label="Password"
            name="password"
            placeholder="••••••••"
            err={state?.error?.password}
          />

          <PasswordElement
            label="Confirm Password"
            name="confirm_password"
            placeholder="••••••••"
            err={state?.error?.confirm_password}
          />
        </div>

        <Button
          className=" w-full h-11 mt-3 rounded-xl bg-green-600 hover:bg-green-700 font-semibold shadow-sm cursor-pointer"
          disabled={isPending}
        >
          {isPending ? (
            <>
              {" "}
              <Loader2 className="animate-spin" size={16} />
              Creating...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>
    </form>
  );
}
