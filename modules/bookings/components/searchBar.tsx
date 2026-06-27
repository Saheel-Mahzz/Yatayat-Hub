"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import SearchFields from "./search/components/searchFields";
import DateField from "./search/components/dateField";
import PassengerField from "./search/components/passengerField";
import { useActionState } from "react";
import { searchAction } from "../actions/searchAction";

export default function SearchBar() {
  const [state, formAction, isPending] = useActionState(searchAction, {});
  return (
    <div className="w-full flex items-center justify-center p-6">
      <form action={formAction}>
        <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-5xl">
          <SearchFields
            label="From"
            placeholder="Select Origin "
            name="from_destination"
          />
          <Button variant="outline" size="icon" className="rounded-full">
            <ArrowLeftRight className="w-4 h-4" />
          </Button>
          <SearchFields
            placeholder="Select Destination"
            label="To"
            name="to_destination"
          />
          <DateField />
          <PassengerField />
          <Button className="rounded-xl px-6 cursor-pointer">
            {isPending ? "Searching..." : "Search"}
          </Button>
        </div>
      </form>
    </div>
  );
}
