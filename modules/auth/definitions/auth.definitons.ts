import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "This field cannot be left empty!")
    .max(50, "Characers cannot excess more than 50 characters"),
  password: z
    .string()
    .trim()
    .min(1, "This field cannot be left empty!")
    .max(50, "Characers cannot excess more than 50 characters"),
});

export const RegisterSchema = z
  .object({
    first_name: z.string().trim().min(1, "This field cannot be left empty!"),
    last_name: z.string().trim().min(1, "This field cannot be left empty!"),
    email: z
      .string()
      .min(1, "This field cannot be left empty!")
      .email("Invalid email address!"), // Email format checking thapeko standard ko lagi
    phone_number: z
      .string()
      .trim()
      .superRefine((val, ctx) => {
        // 1. Empty check
        if (val.length === 0) {
          ctx.addIssue({
            code: "custom",
            message: "This field cannot be left empty!",
          });
          return;
        }

        if (!/^9[678]\d{8}$/.test(val)) {
          ctx.addIssue({
            code: "custom",
            message: "Invalid Nepali phone number!",
          });
        }
      }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters long!" })
      .regex(/[A-Z]/, "Password must contain atleat one uppercase letter")
      .regex(/[a-z]/, "Password must contain atleast one lowercase letter")
      .regex(/[0-9]/, "Password must contain atleast one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain atleat one special character",
      ),
    confirm_password: z
      .string()
      .trim()
      .min(1, { message: "Please confirm your password!" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match!",
    path: ["confirm_password"],
  });

export type ILogin = z.infer<typeof LoginSchema>;
export type IRegister = z.infer<typeof LoginSchema>;
