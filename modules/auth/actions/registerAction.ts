import { api } from "@/lib/axios";
import { RegisterSchema } from "../definitions/auth.definitons";
import { AxiosError } from "axios";
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
    phone_number: formData.get("phone_number"),
    confirm_password: formData.get("confirm_password"),
  };

  const safeData = RegisterSchema.safeParse(rawData);

  if (!safeData.success) {
    const fieldErrors = safeData?.error?.issues?.reduce<Record<string, string>>(
      (acc, curr) => {
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
      data: response?.data,
      success: true,
      message: "User Registered Successfully!",
      error: null,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
    }
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
