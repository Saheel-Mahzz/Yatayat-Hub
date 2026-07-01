import Trips from "@/modules/trips";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = await searchParams;
  return <Trips searchParams={search} />;
}
