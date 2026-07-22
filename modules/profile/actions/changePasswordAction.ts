import { api } from "@/lib/axios";
import {
  PasswordFormValues,
  passwordSchema,
} from "../definitions/profile.definitions";
import { ActionState } from "@/types/action-state";

export default async function changePasswordAction(
  prevstate: ActionState<PasswordFormValues>,
  formData: FormData,
) {
  const rawData = {
    current_password: (formData.get("current_password") as string) || "",
    new_password: (formData.get("new_password") as string) || "",
    confirm_password: (formData.get("confirm_password") as string) || "",
  };

  const { confirm_password, ...payload } = rawData;

  const result = passwordSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors = result?.error?.issues?.reduce<Record<string, string>>(
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
      data: rawData,
    };
  }

  try {
    const reponse = await api.post("/user/change-password/", payload);
    console.log("response", reponse);
    return {
      data: reponse.data,
      success: true,
      message: "Password changed Successfully!",
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      message: "Internal Server Error!",
      data: rawData,
      error: null,
    };
  }
}
