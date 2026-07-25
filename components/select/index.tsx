import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { ILocation } from "../locations/components/locationSelect";

export function SelectElement({
  name,
  options,
  placeholder,
  label,
  err,
  defaultValue,
}: {
  options: ILocation[];
  placeholder: string;
  label: string;
  name: string;
  err?: string;
  defaultValue?: string;
}) {
  return (
    <Field className="w-full ">
      <FieldLabel>{label}</FieldLabel>
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                defaultValue={defaultValue}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {err && <FieldError>{err}</FieldError>}
    </Field>
  );
}
