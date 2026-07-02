import z from "zod";

export const AuthSchema = z.object({
  email: z.string().min(1, "This field cannot be left empty!"),
  password: z.string().min(1, "This field cannot be left empty!"),
});

export type IAuth = z.infer<typeof AuthSchema>;
