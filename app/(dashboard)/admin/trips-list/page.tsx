import TripsList from "@/modules/tripsList";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const search = await searchParams;
  return <TripsList search={search} />;
}
