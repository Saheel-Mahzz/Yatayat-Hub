import React from "react";

interface ISeatGrid {
  bookedSeats: string[];
  selectedSeat: string | null;
  onSeatSelect: (seatName: string) => void;
  totalRows?: number;
}

export default function SeatGrid({
  bookedSeats,
  onSeatSelect,
  selectedSeat,
  totalRows = 10,
}: ISeatGrid) {
  return (
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
              return <div key={`aisle-${rowNum}`} className="w-10 h-10" />;
            }

            const isBooked = bookedSeats.includes(seatName);
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
                onClick={() => onSeatSelect(seatName)}
                className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center text-[11px] font-medium transition-all ${seatStyle}`}
              >
                {seatName}
              </button>
            );
          });
        })}
      </div>
    </div>
  );
}
