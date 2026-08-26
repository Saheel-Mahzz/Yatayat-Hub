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
  onChange,
}: {
  options: ILocation[];
  placeholder: string;
  label: string;
  name: string;
  err?: string;
  defaultValue?: string;
  onChange?: (key: string, value: string) => void;
}) {
  return (
    <Field className="w-full ">
      <FieldLabel className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
        {label}
      </FieldLabel>
      <Select
        name={name}
        defaultValue={defaultValue}
        onValueChange={(val) => onChange?.(name, val)}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
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
