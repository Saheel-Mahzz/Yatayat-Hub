import { api } from "@/lib/axios";
import { ZodError } from "zod";

interface BookingActionResponse {
  data?: string;
  success: boolean;
  message: string;
}

export async function creatBookingAction(
  prevState: BookingActionResponse,
  formData: FormData,
) {
  console.log("form entries", Object.fromEntries(formData));

  const rawData = {
    user: 4,
    trip: formData?.get("trip"),
    seat_number: formData?.get("seat_number"),
  };

  console.log("raw data", rawData);
  try {
    const res = await api.post("/bookings/", rawData);
    console.log("response", res);
    return {
      data: res?.data,
      success: true,
      message: "Booked Successfully!",
    };
  } catch (err) {
    if (err instanceof ZodError) {
      // Yo block bhitra afei ZodError ko type trigger hunchha
      console.error("ZOD FORMATTED:", err.flatten().fieldErrors);
    }
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
