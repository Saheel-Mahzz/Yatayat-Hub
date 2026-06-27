import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import SearchFields from "./search/components/searchFields";
import DateField from "./search/components/dateField";
import PassengerField from "./search/components/passengerField";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-5xl">
        <SearchFields label="From" placeholder="Select Origin " />
        <Button variant="outline" size="icon" className="rounded-full">
          <ArrowLeftRight className="w-4 h-4" />
        </Button>
        <SearchFields placeholder="Select Destination" label="To" />
        <DateField />
        <PassengerField />
        <Button className="rounded-xl px-6 cursor-pointer">Search</Button>
      </div>
    </div>
  );
}
