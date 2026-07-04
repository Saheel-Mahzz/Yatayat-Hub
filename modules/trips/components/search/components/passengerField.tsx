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
    <div className="flex items-center gap-4 border border-input rounded-xl px-4 py-3 w-full justify-between bg-background shadow-sm hover:border-accent-foreground/20 transition-all duration-200">
      <input type="hidden" name="passenger" value={count} />
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-lg text-muted-foreground">
          <Users className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Passengers
          </span>
          <span className="text-sm font-semibold text-foreground mt-0.5">
            {count} Passenger{count > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Modern Compact Counter Box */}
      <div className="flex items-center border border-input bg-muted/50 rounded-lg p-1 min-w-[100px] justify-between">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 rounded-md hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
          onClick={handleDecrement}
          disabled={count === 1}
        >
          <Minus className="w-3 h-3" />
        </Button>

        <span className="text-sm font-bold text-foreground tabular-nums select-none">
          {count}
        </span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="w-7 h-7 rounded-md hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
          onClick={handleIncrement}
          disabled={count === 5}
        >
          <Plus className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
