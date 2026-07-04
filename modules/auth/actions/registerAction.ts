import { api } from "@/lib/axios";
import { RegisterSchema } from "../definitions/auth.definitons";
interface RegisterState {
  // data: IAuth | null;
  success: boolean;
  message: string;
}

export async function registerAction(
  prevState: RegisterState,
  formData: FormData,
) {
  const rawData = {
    first_name: formData?.get("first_name"),
    last_name: formData?.get("last_name"),
    email: formData?.get("email"),
    password: formData?.get("password"),
  };

  const safeData = RegisterSchema.safeParse(rawData);

  if (!safeData.success) {
    // const fieldErrors = safeData?.error?.issues?.reduce((acc, curr) => {
    //   acc[curr?.path] = curr?.message;
    //   return acc;
    // }, {});

    // Acc (Accumulator) lai string dynamic key-value object declare handiyeko
    const fieldErrors = safeData?.error?.issues?.reduce<Record<string, string>>(
      (acc, curr) => {
        // Path array ko first indexing item extract garera string typed conversion deko
        const key = curr.path[0] as string;

        if (key) {
          acc[key] = curr.message;
        }
        return acc;
      },
      {},
    );

    return {
      success: false,
      error: fieldErrors,
      message: "Validation failed!",
    };
  }

  try {
    const response = await api.post("/register/", rawData);

    return {
      success: true,
      message: "User Registered Successfully!",
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
