import { api } from "@/lib/axios";
import { Trip, TripSchema } from "../definitions/tripList.definitions";
import { ActionState } from "@/types/action-state";
import { format } from "date-fns";

export default async function tripCreateAction(
  prevstate: ActionState<Trip>,
  formData: FormData,
) {
  const date = formData.get("date") as string;
  const formattedDate = format(date, "yyyy-MM-dd");
  const rawData = {
    bus: (formData.get("bus") as string) || "",
    time: (formData.get("time") as string) || "",
    from_location: (formData.get("from_location") as string) || "",
    to_location: (formData.get("to_location") as string) || "",
    price: (formData.get("price") as string) || "",
    // date: (formData.get("date") as string) || "",
    date: formattedDate,
  };

  console.log("raw data", rawData);
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
    const reponse = await api.post("/trips/", rawData);
    return {
      data: reponse.data,
      success: true,
      message: "Bus Created Successfully!",
      error: null,
    };
  } catch (err) {
    console.log("err", err);
    console.log("BACKEND ERROR DATA:", err?.response?.data);
    return {
      success: false,
      message: "Internal Server Error!",
      data: rawData,
      error: null,
    };
  }
}
