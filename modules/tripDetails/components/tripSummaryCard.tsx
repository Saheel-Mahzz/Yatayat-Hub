import { Bus, MapPin, CalendarDays, Clock, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ITripDetails } from "../definitions/tripDetails";

interface TripSummaryCardProps {
  tripDetails: ITripDetails;
}

export default function TripSummaryCard({ tripDetails }: TripSummaryCardProps) {
  return (
    <Card className="rounded-2xl shadow-md border bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 text-white p-5">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Bus className="w-6 h-6" />
          </div>

          <div>
            <h3 className="font-bold text-lg">{tripDetails?.bus?.name}</h3>

            <p className="text-sm text-green-100">
              {tripDetails?.bus?.number_plate}
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-5 space-y-5">
        {/* Route */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase">From</p>

            <p className="font-semibold text-slate-800">
              {tripDetails?.from_location}
            </p>
          </div>

          <div className="flex-1 mx-4 border-t border-dashed border-green-300 relative">
            <MapPin className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 text-green-600 bg-white" />
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase">To</p>

            <p className="font-semibold text-slate-800">
              {tripDetails?.to_location}
            </p>
          </div>
        </div>

        <Separator />

        {/* Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-green-600" />

            <div>
              <p className="text-xs text-muted-foreground">Departure</p>

              <p className="text-sm font-semibold">
                {/* {tripDetails?.departure_date} */}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-green-600" />

            <div>
              <p className="text-xs text-muted-foreground">Time</p>

              <p className="text-sm font-semibold">
                {/* {tripDetails?.departure_time} */}
              </p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="bg-green-50 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Ticket Price</p>

            <p className="text-xl font-bold text-green-700">
              Rs. {tripDetails?.price}
            </p>
          </div>

          <IndianRupee className="w-8 h-8 text-green-600" />
        </div>
      </CardContent>
    </Card>
  );
}
