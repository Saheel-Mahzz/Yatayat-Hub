import { api } from "@/lib/axios";
import {
  ILocation,
  LocationSchema,
} from "../definitions/locations.definitions";

interface IPrevState {
  success: boolean;
  error: null | Record<string, string>;
  message: string | null;
  data: ILocation | null;
}

export default async function locationCreateAction(
  prevstate: IPrevState,
  formData: FormData,
) {
  const rawData = {
    name: (formData.get("name") as string) || "",
  };

  const result = LocationSchema.safeParse(rawData);

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
    const reponse = await api.post("/locations/", rawData);
    return {
      data: reponse.data,
      success: true,
      message: "Location Created Successfully!",
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
