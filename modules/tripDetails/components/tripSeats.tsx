"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useActionState, useEffect, useState } from "react";
import { creatBookingAction } from "../actions/createBookingAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import LoginForm from "@/components/auth/loginForm";
import RegisterForm from "@/components/auth/registerForm";

interface ITripDetails {
  id: string | number;
  from_location: string;
  to_location: string;
  bus_type: string;
  price?: string | number; // Optional fallback ko lagi
  bus: {
    name: string;
    total_seats: number;
    number_plate: string;
  };
  booked_seats: string[]; // Array of booked seat numbers
}

export default function Seats({ tripDetails }: { tripDetails: ITripDetails }) {
  console.log("trip details", tripDetails);
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(creatBookingAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state?.success) {
      toast.success("Seat Booked Successfully!");
      router.refresh();
    }
  }, [state]);

  // Backend dynamic booked seats array placeholder
  //   const bookedSeats = ["A1", "A5", "B2", "B12"];
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  // Total 10 वटा rows pattern (10 rows * 4 seats per row = 40 seats)
  const totalRows = 10;
  console.log("state", state);
  return (
    <form action={formAction}>
      <input type="hidden" name="trip" value={tripDetails?.id} />
      <input type="hidden" name="seat_number" value={selectedSeat || ""} />
      <Card className="rounded-2xl shadow-lg max-w-xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Select your seat</h2>
            <span className="text-sm text-muted-foreground">40 seats</span>
          </div>

          {/* Legend */}
          <div className="flex gap-3 mb-6 text-xs justify-center">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-200 rounded-sm" /> Available
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-400 rounded-sm" /> Booked
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-sm" /> Selected
            </div>
          </div>

          {/* FRONT / STEERING WHEEL INDICATOR */}
          <div className="w-full bg-slate-100 rounded-t-lg p-2 text-center text-xs text-muted-foreground mb-4 border-b-2 font-medium tracking-wider">
            🚌 FRONT / DRIVER SIDE
          </div>

          {/* BUS BODY CONTAINER */}
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/50">
            {/* Main 5-Column Grid (Left 2, Middle Aisle 1, Right 2) */}
            <div className="grid grid-cols-5 gap-y-3 gap-x-2 justify-items-center">
              {Array.from({ length: totalRows }).map((_, rowIndex) => {
                const rowNum = rowIndex + 1;

                // Left side strings
                const leftWindow = `A${rowIndex * 2 + 1}`; // A1, A3, A5...
                const leftAisle = `A${rowIndex * 2 + 2}`; // A2, A4, A6...

                // Right side strings
                const rightAisle = `B${rowIndex * 2 + 1}`; // B1, B3, B5...
                const rightWindow = `B${rowIndex * 2 + 2}`; // B2, B4, B6...

                // Row setup matrix layout array order
                const rowSeats = [
                  leftWindow,
                  leftAisle,
                  "AISLE",
                  rightAisle,
                  rightWindow,
                ];

                return rowSeats.map((seatName, columnIndex) => {
                  // If it's the middle column, render an empty walking space
                  if (seatName === "AISLE") {
                    return (
                      <div key={`aisle-${rowNum}`} className="w-10 h-10" />
                    );
                  }

                  const isBooked = tripDetails?.booked_seats.includes(seatName);
                  const isSelected = selectedSeat === seatName;

                  let seatStyle =
                    "bg-white text-gray-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 cursor-pointer";
                  if (isBooked) {
                    seatStyle =
                      "bg-red-400 text-white border-red-400 cursor-not-allowed opacity-70";
                  } else if (isSelected) {
                    seatStyle =
                      "bg-blue-500 text-white border-blue-600 font-semibold shadow-sm scale-105";
                  }

                  return (
                    <button
                      type="button"
                      key={seatName}
                      disabled={isBooked}
                      onClick={() => setSelectedSeat(seatName)}
                      className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center text-[11px] font-medium transition-all ${seatStyle}`}
                    >
                      {seatName}
                    </button>
                  );
                });
              })}
            </div>
          </div>

          {/* Selected Summary Info */}
          {selectedSeat && (
            <p className="text-sm text-center mt-4 text-muted-foreground">
              Selected Seat:{" "}
              <span className="font-bold text-blue-600">{selectedSeat}</span>
            </p>
          )}

          {/* // 1. Modal wrapper le wrap garne */}
          <Dialog>
            {/* 2. Tero tyo button lai Trigger bhitra halne */}
            <DialogTrigger asChild>
              <Button
                type="submit"
                className="w-full mt-6 rounded-full cursor-pointer"
                disabled={!selectedSeat || isPending}
              >
                Book Seat
              </Button>
            </DialogTrigger>

            {/* 3. Modal open huda dekhine content */}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center">
                  Continue your Booking
                </DialogTitle>
                <DialogDescription className="text-center">
                  Please login or create an account to secure your seat.
                </DialogDescription>
              </DialogHeader>

              {/* 4. Login ra Register switch garna Shadcn Tabs use garne */}
              <Tabs defaultValue="login" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                {/* --- LOGIN TAB --- */}
                <TabsContent value="login" className="space-y-4 pt-4">
                  {/* Email Input Field */}
                  {/* <Input type="email" placeholder="test@yopmail.com.." />
                  <Input type="password" placeholder="Password.." />
                  {/* Password Input Field */}
                  {/* <Button className="w-full mt-2">Login & Continue</Button> */}
                  <LoginForm />
                </TabsContent>

                {/* --- REGISTER TAB --- */}
                <TabsContent value="register" className="space-y-4 pt-4">
                  {/* Name Input Field */}
                  {/* Email Input Field */}
                  {/* Password Input Field */}
                  {/* <Button className="w-full mt-2">Create Account</Button> */}
                  <RegisterForm />
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </form>
  );
}
