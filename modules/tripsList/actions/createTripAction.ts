import { api } from "@/lib/axios";
import { Trip, TripSchema } from "../definitions/tripList.definitions";
import { ActionState } from "@/types/action-state";
import { format } from "date-fns";
import { AxiosError } from "axios";

export default async function tripCreateAction(
  prevstate: ActionState<Trip>,
  formData: FormData,
) {
  const id = prevstate?.data?.id;
  const method = id ? "patch" : "post";
  const url = id ? `/trips/${id}/` : "/trips/";
  const message = id
    ? "Trip edited Successfully!"
    : "Trip created Successfully!";

  const rawDate = formData.get("date") as string;
  const formattedDate = rawDate ? format(rawDate, "yyyy-MM-dd") : "";
  const rawData = {
    id: id,
    bus: (formData.get("bus") as string) || "",
    time: (formData.get("time") as string) || "",
    from_location: (formData.get("from_location") as string) || "",
    to_location: (formData.get("to_location") as string) || "",
    price: (formData.get("price") as string) || "",
    date: formattedDate,
  };

  const result = TripSchema.safeParse(rawData);

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
      message: message,
      error: null,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
    }
    return {
      success: false,
      message: "Internal Server Error!",
      data: rawData,
      error: null,
    };
  }
}
