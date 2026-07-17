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
  // value?: ILocation | null;
  value?: string | null;
  // onSelect?: (value: ILocation) => void;
  onSelect?: (value: string) => void;
  // disable?: ILocation | null;
  disable?: string | null;
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
  console.log("valye", value);
  console.log("location", locations);

  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState<ILocation | null>(null);
  // const selectedLocation = locations.find((loc) => loc.value === value);
  const selectedLocation = locations.find(
    (loc) => String(loc.value) === String(value),
  );

  console.log("selcted location", selectedLocation);
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      <MapPin className="w-4 h-4 text-gray-500" />
      <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">{label}</span>

        {/* Hidden input — yehi le FormData ma value carry garcha */}
        <input type="hidden" name={name} value={value ?? ""} />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
              className="justify-between p-0 h-6 font-normal text-left"
            >
              {/* {value ? value.label : placeholder} */}
              {selectedLocation ? selectedLocation.label : placeholder}
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
                        console.log("loc", loc);
                        // onSelect?.(loc);
                        onSelect?.(loc?.value);
                        setOpen(false);
                      }}
                      // className={`${loc.value === disable?.value ? "cursor-none" : "cursor-pointer"}`}
                      className={`${loc.value === disable ? "cursor-none" : "cursor-pointer"}`}
                      // disabled={loc.value === disable?.value}
                      disabled={loc.value === disable}
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
