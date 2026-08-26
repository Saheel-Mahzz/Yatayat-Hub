export const dynamic = "force-dynamic";

import TripsList from "@/modules/tripsList";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = await searchParams;
  return <TripsList search={search} />;
}
