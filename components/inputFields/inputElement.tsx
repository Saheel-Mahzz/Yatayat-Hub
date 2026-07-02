import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputElementProps {
  label: string;
  name: string;
  placeholder: string;
  err?: string;
}

export default function InputElement({
  label,
  name,
  err,
  placeholder,
}: InputElementProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type="email" name={name} placeholder={placeholder} />
      {err && <span className="text-red-700 text-sm">{err}</span>}
    </div>
  );
}
