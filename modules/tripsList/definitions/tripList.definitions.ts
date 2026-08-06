import { Buses } from "@/modules/busList/definitions/buses.definitions";
import z from "zod";

export interface Trip {
  available_seats?: number;
  booked_seats?: string[];
  bus?: Buses | string;
  date: string;
  time: string;
  from_location: string;
  id?: string;
  price: string;
  to_location: string;
}

export const TripSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  bus: z.string().trim().min(1, "This field is required!"),
  time: z.string().trim().min(1, "This field is required!"),
  date: z.string().trim().min(1, "This field is required!"),
  from_location: z.string().trim().min(1, "This field is required!"),
  to_location: z.string().trim().min(1, "This field is required!"),
  price: z.string().trim().min(1, "This field is required!"),
});

export interface IDropdown {
  id: string;
  name: string;
}
