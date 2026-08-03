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
    let errorMessage;
    if (err instanceof AxiosError) {
      // Yo block bhitra afei ZodError ko type trigger hunchha
      console.log("Backend err", err);
      console.log("err", err?.response);
      errorMessage = err?.response?.data?.non_field_errors[0];
    }
    return {
      success: false,
      message: errorMessage ?? "Something went wrong!",
    };
  }
}
