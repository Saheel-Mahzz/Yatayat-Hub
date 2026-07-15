import MyBookings from "../../modules/myBookings";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const search = await searchParams;
  return <MyBookings search={search} />;
}
