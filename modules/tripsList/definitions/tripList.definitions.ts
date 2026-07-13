import { Buses } from "@/modules/busList/definitions/buses.definitions";
import z from "zod";

export interface Trip {
  available_seats?: number;
  booked_seats?: string[];
  bus?: Buses;
  date: string;
  departure_time: string;
  from_location: string;
  id?: string;
  price: string;
  to_location: string;
}

export const TripSchema = z.object({
  id: z.string().optional(),
  bus_name: z.string().min(1, "This field is required!"),
  departure_time: z.string().min(1, "This field is required!"),
  from_location: z.string().min(1, "This field is required!"),
  to_location: z.string().min(1, "This field is required!"),
  price: z.string().min(1, "This field is required!"),
});

export interface IDropdown {
  id: string;
  name: string;
}
