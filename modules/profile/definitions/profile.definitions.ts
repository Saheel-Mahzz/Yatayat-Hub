import z from "zod";

export interface User {
  first_name: string;
  last_name: string;
  phone_number?: string;
  email?: string;
}

export const UserSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, "This field cannot be left empty!")
    .max(100, "Characters cannot exceed more than 100 characters"),
  last_name: z
    .string()
    .trim()
    .min(1, "This field cannot be left empty!")
    .max(100, "Characters cannot exceed more than 100 characters"),
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

      // 2. Regex format check
      if (!/^9[678]\d{8}$/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Invalid Nepali phone number!",
        });
      }
    }),
});

export interface UserResponse {
  user: User;
}

export const passwordSchema = z
  .object({
    current_password: z.string().min(1, "Current password is required!"),
    new_password: z
      .string()
      .min(8, "Password must be atleast 8 characters")
      .regex(/[A-Z]/, "Password must contain atleast one uppercase letter")
      .regex(/[a-z]/, "Password must contain atleatst one lowercase letter")
      .regex(/[0-9]/, "Password must contain atleast one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
    confirm_password: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })
  .refine((data) => data.current_password !== data.new_password, {
    message: "New password must be different from current password",
    path: ["new_password"],
  });

export type PasswordFormValues = z.infer<typeof passwordSchema>;
// export const passwordApiSchema = passwordSchema.omit({ confirm_password: true });

// export type PasswordApiPayload = z.infer<typeof passwordApiSchema>;
