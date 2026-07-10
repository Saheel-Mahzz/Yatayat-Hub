import { api } from "@/lib/axios";
import { Buses, BusSchema } from "../definitions/buses.definitions";

interface IPrevState {
  success: boolean;
  error: null | Record<string, string>;
  message: string | null;
  data: Buses | null;
}

export default async function busCreateAction(
  prevstate: IPrevState,
  formData: FormData,
) {
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
