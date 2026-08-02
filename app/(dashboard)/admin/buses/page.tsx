import BusList from "@/modules/busList";

export default async function BusPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const params = await searchParams;

  return <BusList search={params} />;
}
