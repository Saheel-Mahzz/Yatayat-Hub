import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PASSENGERS } from "@/modules/trips/constants/passenger.const";
import { Users } from "lucide-react";
import React from "react";

export default function PassengerField() {
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      <Users className="w-4 h-4 text-gray-500" />
      <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">Passengers</span>
        <Select name="total_passenger">
          <SelectTrigger className="border-0 p-0 h-6">
            <SelectValue placeholder="1 Passenger" />
          </SelectTrigger>
          <SelectContent>
            {PASSENGERS.map((passenger, index) => (
              <SelectItem key={index} value={passenger?.value}>
                {passenger.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
