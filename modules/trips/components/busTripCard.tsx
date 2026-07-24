import { ArrowRight, Bus, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IBusTrip } from "../definitions/trips.types";

export default function BusTripCard({ trip }: { trip: IBusTrip }) {
  return (
    <div className="max-w-4xl mx-auto border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition">
      {/* TOP ROW */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg text-slate-900">{trip.bus?.name}</h3>

          <p className="text-xs text-muted-foreground">
            • {trip.bus?.number_plate}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold text-slate-900">
            Rs. {trip.price || 1200}
          </p>

          <p className="text-xs text-muted-foreground">per seat</p>
        </div>
      </div>

      {/* ROUTE */}
      <div className="flex items-center gap-4 mt-4">
        <div>
          <p className="text-xs text-muted-foreground">From</p>

          <p className="font-semibold">{trip.from_location}</p>
        </div>

        <div className="flex-1 flex items-center gap-2">
          <div className="h-px bg-slate-300 flex-1" />

          <Bus className="w-4 h-4 text-slate-500" />

          <div className="h-px bg-slate-300 flex-1" />
        </div>

        <div className="text-right">
          <p className="text-xs text-muted-foreground">To</p>

          <p className="font-semibold">{trip.to_location}</p>
        </div>
      </div>

      {/* INFO + ACTION */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <CalendarDays className="w-4 h-4" />

            <span>24 July 2026</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock3 className="w-4 h-4" />

            <span>07:30 AM</span>
          </div>

          <Badge className="bg-green-600 hover:bg-green-600">
            {trip.available_seats} Seats Left
          </Badge>
        </div>

        <Button asChild size="sm" className="rounded-xl px-5">
          <Link href={`/booking/${trip.id}`}>
            Select Seat
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
