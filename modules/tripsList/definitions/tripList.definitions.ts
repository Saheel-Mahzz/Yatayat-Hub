import { Buses } from "@/modules/busList/definitions/buses.definitions";

export interface Trip {
  available_seats: number;
  booked_seats: string[];
  bus: Buses;
  date: string;
  departure_time: string;
  from_location: string;
  id: string;
  price: string;
  time: string;
  to_location: string;
}

export interface TripResponse {
  count: number;
  prev: string;
  next: string;
  results: Trip[];
}
