import { api } from "@/lib/axios";
import { User, UserSchema } from "../definitions/profile.definitions";

interface IPrevState {
  success: boolean;
  error: null | Record<string, string>;
  message: string | null;
  data: User | null;
}

export default async function editProfileAction(
  prevstate: IPrevState,
  formData: FormData,
) {
  console.log("form data", Object.fromEntries(formData));
  const rawData = {
    first_name: (formData.get("first_name") as string) || "",
    last_name: (formData.get("last_name") as string) || "",
  };

  const result = UserSchema.safeParse(rawData);

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
    const reponse = await api.patch("/profile/me/", rawData);
    console.log("response", reponse);
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
