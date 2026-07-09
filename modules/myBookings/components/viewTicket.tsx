"use client";
import TicketModal from "@/modules/tripDetails/components/ticketCard";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import { IBooking } from "../definitions/bookings.defination";

export default function ViewTicket({ ticket }: { ticket: IBooking }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Eye className="cursor-pointer" onClick={() => setOpen(true)} />
      <TicketModal
        isTicketModelOpen={open}
        setIsTicketModelOpen={setOpen}
        trip={ticket.trip}
        seat_number={ticket.seat_number}
        booked_at={ticket.booked_at}
        first_name={ticket.user.first_name}
        last_name={ticket.user.last_name}
      />
    </>
  );
}
