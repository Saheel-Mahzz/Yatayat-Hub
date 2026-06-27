import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Clock, Bus, ArrowRight } from "lucide-react";

export default function BusTripCard() {
  return (
    <div className="max-w-3xl mx-auto border rounded-xl p-4 bg-white shadow-sm flex items-center justify-between gap-6">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">16:55</span>
            <span className="text-xs text-muted-foreground">Central Varna</span>
          </div>

          <div className="flex flex-col items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>02h 35m</span>
            </div>
            <div className="w-24 h-px bg-gray-200 my-1" />
            <div className="flex items-center gap-1">
              <Bus className="w-3 h-3" />
              <span>Direct</span>
            </div>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold">19:30</span>
            <span className="text-xs text-muted-foreground">
              Central Bus Station - Sofia
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Bus
          </Badge>
          <Badge variant="outline" className="text-xs">
            Best Option
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 min-w-25">
        <span className="text-lg font-bold">$76</span>

        <Button className="rounded-lg cursor-pointer">
          Continue <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
