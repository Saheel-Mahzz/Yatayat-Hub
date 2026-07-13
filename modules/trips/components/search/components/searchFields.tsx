"use client";

import { useState } from "react";
import { ChevronsUpDown, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export interface ILocation {
  label: string;
  value: string;
}

interface ISearchFields {
  label: string;
  placeholder: string;
  name: string;
  locations: ILocation[];
  value?: ILocation | null;
  onSelect?: (value: ILocation) => void;
  disable?: ILocation | null;
}

export default function SearchFields({
  label,
  placeholder,
  name,
  locations,
  value,
  onSelect,
  disable,
}: ISearchFields) {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState<ILocation | null>(null);
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      <MapPin className="w-4 h-4 text-gray-500" />
      <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">{label}</span>

        {/* Hidden input — yehi le FormData ma value carry garcha */}
        <input type="hidden" name={name} value={value?.value ?? ""} />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
              className="justify-between p-0 h-6 font-normal text-left"
            >
              {value ? value.label : placeholder}
              <ChevronsUpDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[250px]">
            <Command>
              <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
              <CommandList>
                <CommandEmpty>No location found.</CommandEmpty>
                <CommandGroup>
                  {locations.map((loc) => (
                    <CommandItem
                      key={loc.value}
                      value={loc.label}
                      // onSelect={() => {
                      //   onselect(loc);
                      //   setOpen(false);
                      // }}
                      onSelect={() => {
                        onSelect?.(loc);
                        setOpen(false);
                      }}
                      className={`${loc.value === disable?.value ? "cursor-none" : "cursor-pointer"}`}
                      disabled={loc.value === disable?.value}
                    >
                      {/* <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected?.value === loc.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      /> */}
                      {loc.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
