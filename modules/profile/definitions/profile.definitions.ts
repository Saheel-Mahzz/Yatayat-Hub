import z from "zod";

export interface User {
  first_name: string;
  last_name: string;
  phone_number?: string;
  email?: string;
}

export const UserSchema = z.object({
  first_name: z.string().min(1, "This field cannot be left empty!"),
  last_name: z.string().min(1, "This field cannot be left empty!"),
  phone_number: z.string().optional(),
  email: z.string().optional(),
});

export interface UserResponse {
  user: User;
}
