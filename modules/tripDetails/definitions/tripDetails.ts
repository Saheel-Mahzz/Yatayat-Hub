interface Bus {
  name: string;
  total_seats: string;
  number_plate: string;
}

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

export interface ITripDetails {
  id: string | number;
  from_location: string;
  to_location: string;
  bus_type: string;
  price?: string | number;
  bus: Bus;
  booked_seats: string[];
}

export const LEGEND_ITEMS = [
  { label: "Available", colorClass: "bg-gray-200" },
  { label: "Booked", colorClass: "bg-red-400" },
  { label: "Selected", colorClass: "bg-blue-500" },
] as const;
