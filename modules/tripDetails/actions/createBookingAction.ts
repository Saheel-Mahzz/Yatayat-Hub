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
  const rawData = {
    trip: formData?.get("trip"),
    seat_number: JSON.parse(formData?.get("seat_number") as string),
  };

  console.log("raw data", rawData);
  try {
    const res = await api.post("/bookings/", rawData);
    console.log("res", res);
    return {
      data: res?.data,
      success: true,
      message: "Booked Successfully!",
    };
  } catch (err) {
    console.log("err", err);
    if (err instanceof ZodError) {
      // Yo block bhitra afei ZodError ko type trigger hunchha
      console.log("err", err?.response?.data);
    }
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
