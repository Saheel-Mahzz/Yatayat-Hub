import React from "react";
import { ArrowRight, Bus, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IBusTrip } from "../definitions/trips.types";

export default function BusTripCard({ trip }: { trip: IBusTrip }) {
  return (
    <div className="max-w-3xl mx-auto border rounded-2xl  p-5 bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-6">
      {/* LEFT */}
      <div className="flex flex-col gap-4 w-full">
        {/* TOP */}
        <div className="flex items-start justify-between">
          {/* BUS INFO */}
          <div className="flex flex-col">
            <span className="text-base font-semibold text-slate-900">
              {trip.bus?.name}
            </span>
            <span className="text-xs text-muted-foreground">Bus Service</span>
          </div>

          {/* ROUTE */}
          <div className="flex flex-col items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-800">
                {trip.from_location}
              </span>

              <div className="w-10 h-px bg-gray-300" />

              <span className="font-medium text-slate-800">
                {trip.to_location}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2 text-[11px]">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Daily Trip</span>
              </div>

              <div className="flex items-center gap-1">
                <Bus className="w-3 h-3" />
                <span>{trip.bus_type}</span>
              </div>
            </div>
          </div>

          {/* EMPTY SPACER / ALIGNMENT BALANCE */}
          <div className="w-20" />
        </div>

        {/* BOTTOM TAGS */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant={trip?.available_seats === 0 ? "destructive" : "default"}
            className={
              trip?.available_seats > 0
                ? "bg-green-600 text-white hover:bg-green-700"
                : ""
            }
          >
            {trip?.available_seats === 0
              ? "Sold Out"
              : `${trip?.available_seats} Seats Left`}
          </Badge>

          <Badge variant="outline" className="text-xs">
            Bus No: {trip.bus?.number_plate}
          </Badge>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end justify-between min-w-[120px] h-full">
        <span className="text-xl font-bold text-slate-900">
          Rs. {trip.price || "1,200"}
        </span>

        <Button asChild className="rounded-xl mt-3 w-full">
          <Link href={`/booking/${trip.id}`}>
            Continue <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
