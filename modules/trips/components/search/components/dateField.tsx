import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";

export default function DateField() {
  // const [date, setDate] = useState();
  const [date, setDate] = useState<Date | undefined>(undefined);
  // const maxDate = new Date().getDate() + 30;
  const maxFutureDate = new Date();
  // Aaja ko date ma 30 din thapeko:
  maxFutureDate.setDate(maxFutureDate.getDate() + 30);
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      {/* <input type="hidden" name="departure_time" value={date} />
       */}
      <input
        type="hidden"
        name="departure_time"
        value={date ? date.toISOString() : ""}
      />
      <CalendarIcon className="w-4 h-4 text-gray-500" />
      <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">Departure</span>
        <Popover>
          <PopoverTrigger name="departure_date" asChild>
            <Button
              variant="ghost"
              className="justify-start p-0 h-6 text-gray-500"
            >
              Select date
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              onSelect={setDate}
              disabled={{ before: new Date(), after: maxFutureDate }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
