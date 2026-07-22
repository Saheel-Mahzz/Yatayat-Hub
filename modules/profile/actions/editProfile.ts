import { api } from "@/lib/axios";
import { User, UserSchema } from "../definitions/profile.definitions";
import { ActionState } from "@/types/action-state";
import { email } from "zod";

export default async function editProfileAction(
  prevstate: ActionState<User>,
  formData: FormData,
) {
  const rawData = {
    first_name: (formData.get("first_name") as string) || "",
    last_name: (formData.get("last_name") as string) || "",
    phone_number: "9745328656",
    email: prevstate?.data?.email,
  };
  const { email, phone_number, ...payload } = rawData;

  const result = UserSchema.safeParse(payload);

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
    const reponse = await api.patch("/profile/me/", payload);
    return {
      data: reponse.data,
      success: true,
      message: "Profile Updated Successfully!",
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
