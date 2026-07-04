import { LEGEND_ITEMS } from "../../definitions/tripDetails";

export default function SeatLegend() {
  return (
    <div className="flex gap-3 mb-6 text-xs justify-center">
      {LEGEND_ITEMS.map((item) => (
        <div key={item.label} className="flex items-center gap-1">
          <div className={`w-3 h-3 rounded-sm ${item.colorClass}`} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
