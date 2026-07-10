import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputElementProps {
  label: string;
  name: string;
  placeholder?: string;
  err?: string;
  type: string;
  // value?: string;
}

export default function InputElement({
  label,
  name,
  err,
  type,
  placeholder,
  // value,
}: InputElementProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
      {err && <span className="text-red-700 text-sm">{err}</span>}
    </div>
  );
}
