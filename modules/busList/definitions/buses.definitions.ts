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
  name: z
    .string()
    .trim()
    .min(1, "This field is required!")
    .max(100, "Name must be less than 100 characters"),
  number_plate: z
    .string()
    .trim()
    .min(1, "This field is required!")
    .regex(
      /^[A-Za-z]{2}\s?\d{1,2}\s?[A-Za-z]{2,3}\s?\d{3,4}$/,
      "Format thik chaina, e.g. BA 2 KHA 1234",
    )
    .toUpperCase(),
  total_seats: z.coerce
    .number({
      error: "Number huna paryo",
    })
    .int("Seats must be a whole number")
    .min(10, "Number huna paryo, min: 10, max: 60")
    .max(40, "Number huna paryo, min: 10, max: 40"),
  // bus_type: z.string().trim().min(1, "This field is required!"),
  bus_type: z.enum(["AC", "NON_AC", "DELUXE", "SLEEPER"], {
    error: "Bus type select garnu paryo",
  }),
});
