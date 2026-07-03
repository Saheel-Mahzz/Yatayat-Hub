import z from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "This field cannot be left empty!"),
  password: z.string().min(1, "This field cannot be left empty!"),
});
export const RegisterSchema = z.object({
  first_name: z.string().min(1, "This field cannot be left empty!"),
  last_name: z.string().min(1, "This field cannot be left empty!"),
  email: z.string().min(1, "This field cannot be left empty!"),
  password: z.string().min(1, "This field cannot be left empty!"),
});

export type ILogin = z.infer<typeof LoginSchema>;
export type IRegister = z.infer<typeof LoginSchema>;
