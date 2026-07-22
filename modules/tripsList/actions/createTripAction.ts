import { api } from "@/lib/axios";
import { Trip, TripSchema } from "../definitions/tripList.definitions";
import { ActionState } from "@/types/action-state";

export default async function tripCreateAction(
  prevstate: ActionState<Trip>,
  formData: FormData,
) {
  const rawData = {
    bus_name: (formData.get("name") as string) || "",
    departure_time: (formData.get("time") as string) || "",
    from_location: (formData.get("from_location") as string) || "",
    to_location: (formData.get("to_location") as string) || "",
    price: (formData.get("to_location") as string) || "",
    date: (formData.get("date") as string) || "",
  };

  const result = TripSchema.safeParse(rawData);

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
    const reponse = await api.post("/buses/", rawData);
    return {
      data: reponse.data,
      success: true,
      message: "Bus Created Successfully!",
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
