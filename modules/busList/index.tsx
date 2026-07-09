import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Plus } from "lucide-react";
import React from "react";
import CreateBusbutton from "./components/createBusbutton";

export default function BusList() {
  return (
    <div className="space-y-6">
      <div
        className="
flex
justify-between
items-center
"
      >
        <div>
          <h1 className="text-2xl font-bold">Buses</h1>

          <p className="text-muted-foreground">Manage your buses</p>
        </div>

        <CreateBusbutton />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bus List</CardTitle>
        </CardHeader>

        <CardContent>
          <div
            className="
grid
grid-cols-3
gap-5
"
          >
            {[
              {
                name: "Deluxe Express",
                type: "AC",
                seat: 40,
                plate: "BA 2 KHA 1234",
              },

              {
                name: "Mountain Rider",
                type: "Tourist",
                seat: 35,
                plate: "BA 1 PA 2222",
              },
            ].map((bus) => (
              <Card key={bus.plate} className="rounded-xl">
                <CardContent className="p-5 space-y-3">
                  <div className="flex justify-between">
                    <Bus />

                    <span className="text-sm text-muted-foreground">
                      {bus.type}
                    </span>
                  </div>

                  <h2 className="font-semibold">{bus.name}</h2>

                  <p>Seats: {bus.seat}</p>

                  <p>
                    Plate:
                    {bus.plate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
