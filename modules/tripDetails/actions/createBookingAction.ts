import { api } from "@/lib/axios";

export async function creatBookingAction(prevState, formData: FormData) {
  console.log("form entries", Object.fromEntries(formData));

  const rawData = {
    user: 1,
    trip: formData?.get("trip"),
    seat_number: formData?.get("seat_number"),
  };

  console.log("raw data", rawData);
  try {
    const res = await api.post("http://127.0.0.1:8000/api/bookings/", rawData);
    console.log("response", res);
    return {
      data: res?.data,
      success: true,
      message: "Booked Successfully!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
