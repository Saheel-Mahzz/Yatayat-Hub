import { api } from "@/lib/axios";
import { LoginSchema } from "../definitions/auth.definitons";

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
    console.log("err", safeData?.error?.issues);

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
    return {
      success: false,
      message: "Internal Server error!",
    };
  }
}
