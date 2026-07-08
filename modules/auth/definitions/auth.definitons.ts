// import z from "zod";

// export const LoginSchema = z.object({
//   email: z.string().min(1, "This field cannot be left empty!"),
//   password: z.string().min(1, "This field cannot be left empty!"),
// });
// export const RegisterSchema = z.object({
//   first_name: z.string().min(1, "This field cannot be left empty!"),
//   last_name: z.string().min(1, "This field cannot be left empty!"),
//   email: z.string().min(1, "This field cannot be left empty!"),
//   // password: z.string().min(1, "This field cannot be left empty!"),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters long!" }),
//   confirm_password: z
//     .string()
//     .min(1, { message: "Please confirm your password!" }),
// })
// .refine((data) => data.password === data.confirm_password, {
//   message: "Passwords do not match, feri check gara bro!",
//   path: ["confirm_password"], // error message confirm_password field kai muni dekhauxa yesle
// })
// phone_number: z
//     .string()
//     .trim()
//     .superRefine((val, ctx) => {
//       // 1. Empty check
//       if (val.length === 0) {
//         ctx.addIssue({
//           code: "custom", // <-- Simple string 'custom' halne aba!
//           message: "This field cannot be left empty!",
//         });
//         return;
//       }

//       // 2. Regex format check
//       if (!/^9[678]\d{8}$/.test(val)) {
//         ctx.addIssue({
//           code: "custom", // <-- standard string format
//           message: "Invalid Nepali phone number!",
//         });
//       }
//     })

import { z } from "zod"; // Block style import fixed

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "This field cannot be left empty!")
    .max(50, "Field cannot excess more than 50 characters"),
  password: z
    .string()
    .min(1, "This field cannot be left empty!")
    .max(50, "Field cannot excess more than 50 characters"),
});

export const RegisterSchema = z
  .object({
    first_name: z.string().min(1, "This field cannot be left empty!"),
    last_name: z.string().min(1, "This field cannot be left empty!"),
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
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long!" }),
    confirm_password: z
      .string()
      .min(1, { message: "Please confirm your password!" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match!",
    path: ["confirm_password"],
  });

export type ILogin = z.infer<typeof LoginSchema>;
export type IRegister = z.infer<typeof LoginSchema>;
