import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function DateField({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: string;
}) {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : undefined,
  );
  const maxFutureDate = new Date();
  maxFutureDate.setDate(maxFutureDate.getDate() + 30);
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      <input
        type="hidden"
        name={name}
        value={date ? format(date, "yyyy-MM-dd") : ""}
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
              {date ? format(date, "yyyy-MM-dd") : "select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={{ before: new Date(), after: maxFutureDate }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
