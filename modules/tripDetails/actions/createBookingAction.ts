import { api } from "@/lib/axios";
import { AxiosError } from "axios";

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

  try {
    const res = await api.post("/bookings/", rawData);
    return {
      data: res?.data,
      success: true,
      message: "Booked Successfully!",
    };
  } catch (err) {
    let errorMessage;
    if (err instanceof AxiosError) {
      errorMessage = err?.response?.data?.non_field_errors[0];
    }
    return {
      success: false,
      message: errorMessage ?? "Something went wrong!",
    };
  }
}
