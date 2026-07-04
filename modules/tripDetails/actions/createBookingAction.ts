import { api } from "@/lib/axios";

interface BookingActionResponse {
  data?: string; // Backend response dynamic huna sakcha
  success: boolean;
  message: string;
}

export async function creatBookingAction(
  prevState: BookingActionResponse,
  formData: FormData,
) {
  console.log("form entries", Object.fromEntries(formData));

  const rawData = {
    // user: 4,
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
    console.error("DEBUG BOOKING ERROR:", err);
    console.error("RESPONSE DATA:", err.response?.data);
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
