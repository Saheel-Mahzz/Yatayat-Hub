import React, { useState } from "react";
import { CheckCircle2, Download, Bus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ITripDetails } from "../definitions/tripDetails";
import { format } from "date-fns";

interface ITicketDetails {
  first_name?: string;
  last_name?: string;
  email: string;
  trip: ITripDetails;
  seat_number: string;
  isTicketModelOpen: boolean;
  setIsTicketModelOpen: (type: boolean) => void;
  booked_at: string;
}

export default function TicketModal({
  isTicketModelOpen,
  setIsTicketModelOpen,
  email,
  // first_name,
  // last_name,
  seat_number,
  trip,
  booked_at,
}: ITicketDetails) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    // Default open={true} for testing static UI popup view
    <Dialog open={isTicketModelOpen} onOpenChange={setIsTicketModelOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl gap-0 border-none bg-slate-50">
        {/* Top Decorative Banner */}
        <DialogHeader className="bg-emerald-600 text-white p-6 flex flex-col items-center text-center relative">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <DialogTitle className="text-xl font-bold tracking-wide text-white">
            Booking Confirmed!
          </DialogTitle>
          <p className="text-emerald-100 text-xs mt-1 font-medium">
            {/* Ticket ID: #21 • Booked at {format()} */}
          </p>

          {/* Authentic Ticket Left/Right Circle Cutouts */}
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-background rounded-full border-r border-slate-200"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-background rounded-full border-l border-slate-200"></div>
        </DialogHeader>

        {/* Ticket Details Core Area */}
        <div className="p-6 space-y-4">
          {/* Main Route Segment */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-left">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                From
              </span>
              <p className="text-lg font-extrabold text-slate-800">
                {trip?.from_location}
              </p>
            </div>

            {/* Bus Animation Connection Vector */}
            <div className="flex flex-col items-center flex-1 mx-4">
              <Bus className="w-5 h-5 text-emerald-600 animate-pulse" />
              <div className="w-full border-t-2 border-dashed border-emerald-300 mt-1 relative"></div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                To
              </span>
              <p className="text-lg font-extrabold text-slate-800">
                {trip?.to_location}
              </p>
            </div>
          </div>

          {/* Vehicle Information Panel */}
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Hamro Deluxe</h4>
              <p className="text-xs text-muted-foreground font-medium">
                Type: Deluxe
              </p>
            </div>
            <Badge
              variant="outline"
              className="bg-slate-50 font-mono text-xs font-bold px-2.5 py-1 text-slate-700 border-slate-200"
            >
              {trip?.bus?.number_plate}
            </Badge>
          </div>

          {/* Meta Information Metadata Grid */}
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm grid grid-cols-2 gap-y-4 gap-x-4 text-sm">
            <div>
              <span className="text-[11px] font-medium text-muted-foreground block mb-0.5">
                Passenger
              </span>
              <p className="font-semibold text-slate-800">Sahil Maharjan</p>
              <span className="text-[11px] text-muted-foreground font-mono block">
                {email}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-medium text-muted-foreground block mb-0.5">
                Seat Number
              </span>
              <Badge
                variant="secondary"
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border border-emerald-200 font-bold text-sm px-3 py-0.5 rounded-md"
              >
                {seat_number}
              </Badge>
            </div>

            <div className="col-span-2">
              <Separator className="bg-slate-100 my-1" />
            </div>

            <div>
              <span className="text-[11px] font-medium text-muted-foreground block mb-0.5">
                Departure Date
              </span>
              <p className="font-semibold text-slate-800">2026-07-01</p>
            </div>

            <div>
              <span className="text-[11px] font-medium text-muted-foreground block mb-0.5">
                Departure Time
              </span>
              <p className="font-semibold text-slate-800">08:30 AM</p>
            </div>
          </div>
        </div>

        {/* Action Button Controls */}
        <DialogFooter className="bg-white p-6 pt-2 flex flex-col gap-2 sm:flex-col">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 rounded-xl shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download PDF Ticket
          </Button>

          <Button
            variant="ghost"
            className="w-full text-slate-500 hover:text-slate-700 font-medium h-10 rounded-xl text-xs"
          >
            Close & Go to Dashboard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
