import React from "react";
import InputElement from "../../components/inputFields/inputElement";
import PasswordElement from "../../components/inputFields/passportElement";
import { Button } from "../../components/ui/button";

export default function RegisterForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <InputElement
          label="First Name"
          name="first_name"
          placeholder="Saheel"
          type="text"
        />
        <InputElement
          label="Last Name"
          name="last_name"
          placeholder="Maharjan"
          type="text"
        />
      </div>
      <InputElement
        label="Email"
        name="email"
        placeholder="test@yopmail.com"
        type="email"
      />
      <PasswordElement label="Password" name="password" placeholder="*******" />
      <Button className="w-full mt-2">Create Account</Button>
    </div>
  );
}
