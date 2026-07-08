// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { PASSENGERS } from "@/modules/trips/constants/passenger.const";
// import { Users } from "lucide-react";
// import React from "react";

// export default function PassengerField() {
//   return (
//     <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
//       <Users className="w-4 h-4 text-gray-500" />
//       <div className="flex flex-col w-full">
//         <span className="text-xs text-gray-500">Passengers</span>
//         <Select name="total_passenger">
//           <SelectTrigger className="border-0 p-0 h-6">
//             <SelectValue placeholder="1 Passenger" />
//           </SelectTrigger>
//           <SelectContent>
//             {PASSENGERS.map((passenger, index) => (
//               <SelectItem key={index} value={passenger?.value}>
//                 {passenger.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Users, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PassengerField() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 5) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between gap-3 border border-input rounded-xl px-3 py-2.5 w-full bg-background shadow-sm transition-all hover:border-accent-foreground/20">
      <input type="hidden" name="passenger" value={count} />

      {/* Passenger Info */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center justify-center w-9 h-9 bg-muted rounded-lg shrink-0">
          <Users className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold truncate">
            {count} Passenger{count > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center gap-1 border border-input bg-muted/50 rounded-lg p-1 shrink-0">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-md"
          onClick={handleDecrement}
          disabled={count === 1}
        >
          <Minus className="w-3 h-3" />
        </Button>

        <span className="w-5 text-center text-sm font-bold tabular-nums">
          {count}
        </span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-md"
          onClick={handleIncrement}
          disabled={count === 5}
        >
          <Plus className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
