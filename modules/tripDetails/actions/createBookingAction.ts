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
    seat_number: formData?.get("seat_number"),
  };

  try {
    const res = await api.post("/bookings/", rawData);
    return {
      data: res?.data,
      success: true,
      message: "Booked Successfully!",
    };
  } catch (err) {
    if (err instanceof ZodError) {
      // Yo block bhitra afei ZodError ko type trigger hunchha
    }
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
