import { Suspense } from "react";
import MyBookings from "../../modules/myBookings";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = await searchParams;
  return (
    <Suspense fallback={<div>Loading bookings...</div>}>
      <MyBookings search={search} />
    </Suspense>
  );
}
