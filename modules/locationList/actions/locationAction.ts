import { api } from "@/lib/axios";
import {
  ILocation,
  LocationSchema,
} from "../definitions/locations.definitions";
import { AxiosError } from "axios";
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
  const id = prevstate?.data?.id;

  const method = id ? "patch" : "post";
  const url = id ? `/locations/${id}/` : "/locations/";
  const responseMessage = id
    ? "Location Edited Successfully."
    : "Location Created Successfully!";
  const rawData = {
    name: (formData.get("name") as string) || "",
  };

  const result = LocationSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors = result?.error?.issues?.reduce<Record<string, string>>(
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
      data: rawData,
    };
  }

  try {
    const reponse = await api[method](url, rawData);
    return {
      data: reponse.data,
      success: true,
      message: responseMessage,
      error: null,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      const errMessage = err?.response?.data?.name[0];
      return {
        success: false,
        message: errMessage,
        data: rawData,
        error: err?.response?.data?.name[0],
      };
    }
    return {
      success: false,
      message: "Internal Server Error!",
      data: rawData,
      error: null,
    };
  }
}
