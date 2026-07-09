import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import AddTripButton from "./components/addTripButton";

export default function TripsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Trips</h1>

          <p className="text-muted-foreground">Create and manage trips</p>
        </div>

        <AddTripButton />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Trips</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {[
              {
                from: "Kathmandu",
                to: "Pokhara",
                bus: "Deluxe Express",
                date: "2026-07-10",
                time: "7:00 AM",
                price: 800,
              },
            ].map((trip) => (
              <div
                key={trip.date}
                className="
border
rounded-xl
p-5
flex
justify-between
items-center
"
              >
                <div>
                  <h2 className="font-semibold">
                    {trip.from} → {trip.to}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {trip.date} • {trip.time}
                  </p>
                </div>

                <div>
                  <p>{trip.bus}</p>

                  <p className="font-semibold">Rs. {trip.price}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
