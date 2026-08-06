import TripDetails from "@/modules/tripDetails";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

export default async function page({ params }: PageProps<"/booking/[id]">) {
  const { id } = await params;
  return <TripDetails tripId={id} />;
}
