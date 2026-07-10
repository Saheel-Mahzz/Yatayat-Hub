import z from "zod";

export interface Buses {
  id?: number;
  name: string;
  number_plate: string;
  total_seats: string;
  bus_type: string;
}

export const BusSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "This field is required!"),
  number_plate: z.string().min(1, "This field is required!"),
  total_seats: z.string().min(1, "This field is required!"),
  bus_type: z.string().min(1, "This field is required!"),
});
