import BusList from "@/modules/busList";
import { Suspense } from "react";

export default async function BusPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const params = await searchParams;

  return (
    <Suspense>
      <BusList search={params} />
    </Suspense>
  );
}
