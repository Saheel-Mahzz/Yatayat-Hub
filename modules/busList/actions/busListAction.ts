import { api } from "@/lib/axios";
import { Buses, BusSchema } from "../definitions/buses.definitions";
import { ActionState } from "@/types/action-state";
import axios from "axios";

export default async function busCreateAction(
  prevstate: ActionState<Buses>,
  formData: FormData,
) {
  const id = prevstate?.data?.id;

  const method: "patch" | "post" = id ? "patch" : "post";
  const url = id ? `/buses/${id}/` : "/buses/";
  const rawData = {
    name: (formData.get("name") as string) || "",
    number_plate: (formData.get("number_plate") as string) || "",
    total_seats: (formData.get("total_seats") as string) || "",
    bus_type: (formData.get("bus_type") as string) || "",
  };

  const result = BusSchema.safeParse(rawData);

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
      message: id ? "Bus Edited Successfully!" : "Bus Created Successfully!",
      error: null,
    };
  } catch (err) {
    console.error("Bus create/update error:", err); // debugging को लागि (server log ma देखिन्छ)

    if (axios.isAxiosError(err)) {
      return {
        success: false,
        message:
          err.response?.data?.message ??
          "Something went wrong. Please try again.",
        data: rawData,
        error: err.response?.data ?? null, // backend ko validation error (field-wise) frontend मा पठाउने
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
      data: rawData,
      error: null,
    };
  }
}
