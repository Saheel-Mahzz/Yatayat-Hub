import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeftRight,
  Calendar as CalendarIcon,
  MapPin,
  Users,
} from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-5xl">
        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
          <MapPin className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500">From</span>
            <Input
              placeholder="Select origin"
              className="border-0 p-0 h-6 focus-visible:ring-0"
            />
          </div>
        </div>

        <Button variant="outline" size="icon" className="rounded-full">
          <ArrowLeftRight className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
          <MapPin className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500">To</span>
            <Input
              placeholder="Select destination"
              className="border-0 p-0 h-6 focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
          <CalendarIcon className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500">Departure</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="justify-start p-0 h-6 text-gray-500"
                >
                  Select date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
          <Users className="w-4 h-4 text-gray-500" />
          <div className="flex flex-col w-full">
            <span className="text-xs text-gray-500">Passengers</span>
            <Select>
              <SelectTrigger className="border-0 p-0 h-6">
                <SelectValue placeholder="1 Passenger" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="rounded-xl px-6">Search</Button>
      </div>
    </div>
  );
}
