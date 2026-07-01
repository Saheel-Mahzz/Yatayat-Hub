import React from "react";
import { ArrowRight, Bus, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IBusTrip } from "../definitions/trips.types";

export default function BusTripcard({ trip }: { trip: IBusTrip }) {
  return (
    <div className="max-w-3xl mx-auto border rounded-xl mb-3 p-4 bg-white shadow-sm flex items-center justify-between gap-6">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-3 w-full">
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          {/* FROM */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{trip.bus?.name}</span>
            <span className="text-xs text-muted-foreground">
              {trip.from_location}
            </span>
          </div>

          {/* MIDDLE INFO */}
          <div className="flex flex-col items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Trip</span>
            </div>

            <div className="w-24 h-px bg-gray-200 my-1" />

            <div className="flex items-center gap-1">
              <Bus className="w-3 h-3" />
              <span>{trip.bus_type}</span>
            </div>
          </div>

          {/* TO */}
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold">{trip.to_location}</span>
            <span className="text-xs text-muted-foreground">Destination</span>
          </div>
        </div>

        {/* BOTTOM TAGS */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">
            Seats: {trip.bus?.total_seats ?? "-"}
          </Badge>

          <Badge variant="outline" className="text-xs">
            Bus No: {trip.bus?.number_plate}
          </Badge>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end gap-2 min-w-25">
        <span className="text-lg font-bold text-slate-900">
          {/* Yedi backend ma price chha bhane display garcha, chaina bhane default fallbacks */}
          Rs. {trip.price || "1,200"}
        </span>

        {/* asChild use garda HTML markup standard (button inside anchor bug) hudena */}
        <Button asChild className="rounded-lg cursor-pointer">
          <Link href={`/booking/${trip.id}`}>
            Continue <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
