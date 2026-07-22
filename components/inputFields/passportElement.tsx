import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

interface InputElementProps {
  label: string;
  name: string;
  placeholder: string;
  err?: string;
  defaultValue?: string;
}

export default function PasswordElement({
  label,
  name,
  placeholder,
  err,
  defaultValue,
}: InputElementProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex border rounded-xl items-center focus-within:ring-2 ring-ring ">
        <Input
          className="border-0 border-none focus-visible:ring-0"
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        <span
          className="mr-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </span>
      </div>
      {err && <span className="text-red-700 text-sm">{err}</span>}
    </div>
  );
}
