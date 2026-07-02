"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import SearchFields from "./search/components/searchFields";
import DateField from "./search/components/dateField";
import PassengerField from "./search/components/passengerField";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function TripFilters({
  locations,
}: {
  locations: {
    label: string;
    value: string;
  }[];
}) {
  const router = useRouter();
  console.log("locations", locations);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // 1. Initial empty search params initialize garne
    const params = new URLSearchParams();

    // 2. Form fields bata values line
    const from = formData.get("from_destination") as string;
    const to = formData.get("to_destination") as string;
    const passenger = formData.get("passenger") as string; // Check dynamic passenger name attribute
    const date = formData.get("departure_time") as string; // Check dynamic date name attribute

    // 3. Backend ko logic jastai input check garera query set garne
    if (from) params.set("from_location", from);
    if (to) params.set("to_location", to);
    if (passenger) params.set("passenger", passenger);
    if (date) params.set("departure_time", date);

    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      params.set("departure_time", formattedDate);
    }
    // 4. Clean URL push handine
    // output: /bookings?from_location=KTM&passenger=2
    router.push(`/trips?${params.toString()}`);
  };
  return (
    <div className="w-full flex items-center justify-center p-6 ">
      <form onSubmit={handleSearch} className=" w-full">
        <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-5xl mx-auto">
          <SearchFields
            locations={locations}
            label="From"
            placeholder="Select Origin "
            name="from_destination"
          />
          <Button variant="outline" size="icon" className="rounded-full">
            <ArrowLeftRight className="w-4 h-4" />
          </Button>
          <SearchFields
            locations={locations}
            placeholder="Select Destination"
            label="To"
            name="to_destination"
          />
          <DateField />
          <PassengerField />
          <Button className="rounded-xl px-6 cursor-pointer">Search</Button>
        </div>
      </form>
    </div>
  );
}
