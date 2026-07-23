import z from "zod";

export const LocationSchema = z.object({
  id: z.number().optional(),
  name: z.string().trim().min(1, "This field is required!"),
});

export type ILocation = z.infer<typeof LocationSchema>;
