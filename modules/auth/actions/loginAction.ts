import { api } from "@/lib/axios";
import { LoginSchema } from "../definitions/auth.definitons";
import { AxiosError } from "axios";

interface LoginState {
  // data: IAuth | null;
  success: boolean;
  message: string;
}
export async function loginAction(prevState: LoginState, formData: FormData) {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const safeData = LoginSchema.safeParse(rawData);
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
      message: "Validation Error!",
    };
  }

  try {
    const response = await api.post("/login/", rawData);
    return {
      data: response?.data,
      success: true,
      message: "Login Succesfull!",
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      const backendError =
        err?.response?.data?.message ||
        "Invalid Credentials or request failed!";

      return {
        success: false,
        message: backendError,
      };
    }

    if (err instanceof Error) {
    }
    return {
      success: false,
      message: "Internal Server error!",
    };
  }
}
