"use client";

import { Bus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BUS_TYPE } from "@/modules/busList/constants/busType.const";
import { SelectElement } from "@/components/select";
import { PRICES } from "../constants/passenger.const";

export default function SecondaryFilters() {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(search);
  const handleFilterChange = (key: string, value: string) => {
    params.delete("page");
    const currentValue = params.get(key);
    if (value === "ALL" || currentValue === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-2 border-b pb-3 border-gray-100">
        <Filter className="w-4 h-4 text-gray-500" />
        <h3 className="font-semibold text-gray-800 text-sm tracking-wide">
          Filter Trips
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        <SelectElement
          label="Trip Price"
          name="price_sort"
          options={PRICES}
          placeholder="Sort by price"
          onChange={handleFilterChange}
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <Bus className="w-3.5 h-3.5 text-gray-500" /> Bus Type
        </label>

        <div className="flex flex-col gap-2">
          {BUS_TYPE.map((type) => {
            const currentBusType = params.get("bus_type") || "ALL";
            const isActive = currentBusType === type.value;
            return (
              <Button
                key={type.value}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange("bus_type", type.value)}
                className={`w-full justify-start text-xs h-9 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-black text-white hover:bg-gray-800"
                    : "text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {type.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
