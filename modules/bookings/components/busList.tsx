import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Clock, Bus, ArrowRight } from "lucide-react";
export interface IBusTrip {
  id: string;
  name: string;
  total_seats: number;
  number_plate: number;
  bus_type: string;
  from_location: string;
  to_location: string;
  departure_time: string;
  available_seats: string;
}
export default function BusTripCard({ allBus }: { allBus: IBusTrip[] }) {
  return (
    <>
      {allBus?.map((b) => (
        <div
          key={b?.id}
          className="max-w-3xl mx-auto border rounded-xl mb-3 p-4 bg-white shadow-sm flex items-center justify-between gap-6"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-3 w-full">
            {/* TOP ROW */}
            <div className="flex items-center justify-between">
              {/* FROM */}
              <div className="flex flex-col">
                {/* <span className="text-sm font-semibold">
                  {b?.departure_time}
                </span> */}
                <span className="text-xs text-muted-foreground">
                  {b?.from_location}
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
                  <span>{b?.bus_type}</span>
                </div>
              </div>

              {/* TO */}
              <div className="flex flex-col text-right">
                <span className="text-sm font-semibold">{b?.to_location}</span>
                <span className="text-xs text-muted-foreground">
                  Destination
                </span>
              </div>
            </div>

            {/* BOTTOM TAGS */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                Seats: {b?.available_seats}/{b?.total_seats}
              </Badge>

              <Badge variant="outline" className="text-xs">
                Bus No: {b?.number_plate}
              </Badge>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-2 min-w-25">
            <span className="text-lg font-bold">
              {/* placeholder price since not in API */}
              $--
            </span>

            <Button className="rounded-lg cursor-pointer">
              Continue <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
