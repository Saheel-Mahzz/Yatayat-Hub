"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { startTransition, useActionState, useEffect, useState } from "react";
import { creatBookingAction } from "../actions/createBookingAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import TicketModal from "./ticketCard";
import SeatLegend from "./seats/seatLegend";
import SeatGrid from "./seats/seatGrid";
import { AuthBookingDialog } from "./seats/authBookingDialog";
import { ITripDetails } from "../definitions/tripDetails";
import useAuth from "@/context/authContext";

export default function Seats({ tripDetails }: { tripDetails: ITripDetails }) {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const [state, formAction, isPending] = useActionState(creatBookingAction, {
    success: false,
    message: "",
  });
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isAuthModelOpen, setIsAuthModelOpen] = useState<boolean>(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (state?.success) {
      toast.success("Seat Booked Successfully!");
      // setIsTicketModalOpen(true)

      setTimeout(() => {
        setSelectedSeat(null);
        setIsTicketModalOpen(true);
      }, 0);
      router.refresh();
    }
  }, [state]);

  const executeBooking = (seat: string) => {
    const formData = new FormData();
    formData.append("trip", String(tripDetails?.id));
    formData.append("seat_number", seat);
    startTransition(() => {
      formAction(formData);
    });
  };

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedSeat) return;
    if (isLoggedIn) {
      executeBooking(selectedSeat);
    } else {
      setIsAuthModelOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    // setIsLoggedIn(true);
    setIsAuthModelOpen(false);
    if (selectedSeat) {
      executeBooking(selectedSeat);
    }
  };

  const calculatedRows = Math.ceil(Number(tripDetails?.bus?.total_seats) / 4); // Assuming 4 seats per row

  return (
    <>
      <form onSubmit={handleBookingSubmit}>
        <input type="hidden" name="trip" value={tripDetails?.id} />
        <input type="hidden" name="seat_number" value={selectedSeat || ""} />
        <Card className="rounded-2xl shadow-lg max-w-xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Select your seat</h2>
              <span className="text-sm text-muted-foreground">
                {tripDetails?.bus?.total_seats} seats
              </span>
            </div>
            <SeatLegend />

            <div className="w-full bg-slate-100 rounded-t-lg p-2 text-center text-xs text-muted-foreground mb-4 border-b-2 font-medium tracking-wider">
              🚌 FRONT / DRIVER SIDE
            </div>

            <SeatGrid
              bookedSeats={tripDetails?.booked_seats}
              onSeatSelect={setSelectedSeat}
              selectedSeat={selectedSeat}
              totalRows={calculatedRows}
            />

            {/* Selected Summary Info */}
            {selectedSeat && (
              <p className="text-sm text-center mt-4 text-muted-foreground">
                Selected Seat:{" "}
                <span className="font-bold text-blue-600">{selectedSeat}</span>
              </p>
            )}

            <Button
              type="submit"
              // onClick={handleSeatClick}
              className="w-full mt-6 rounded-full cursor-pointer"
              disabled={!selectedSeat || isPending}
            >
              Book Seat
            </Button>
          </CardContent>
          {/* {state?.success && (
            <TicketModal
              // isTicketModelOpen
              // setIsTicketModelOpen={setIsTicketModalOpen}
            />
          )} */}

          <TicketModal
            isTicketModelOpen={isTicketModalOpen}
            setIsTicketModelOpen={setIsTicketModalOpen}
            email={state?.data?.email}
            seat_number={state?.data?.seat_number}
            booked_at={state?.data?.booked_at}
            trip={state?.data?.trip}
          />
        </Card>
      </form>
      <AuthBookingDialog
        isOpen={isAuthModelOpen}
        onOpenChange={setIsAuthModelOpen}
        onAuthSuccess={handleAuthSuccess}
        title="Continue your Booking"
        description="Please login or create an account to secure your seat.s"
      />
    </>
  );
}
