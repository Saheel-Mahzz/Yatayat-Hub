import TripDetails from "@/modules/tripDetails";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <TripDetails tripId={id} />;
}
