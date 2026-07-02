import React from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";

export default function RegisterForm() {
  return (
    <div className="space-y-4">
      <InputElement label="Email" name="email" placeholder="test@yopmail.com" />
      <PasswordElement label="Password" name="password" placeholder="*******" />
      <Button className="w-full mt-2">Create Account</Button>
    </div>
  );
}
