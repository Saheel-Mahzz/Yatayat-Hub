export const dynamic = "force-dynamic";

import { Suspense } from "react";
import BusList from "@/modules/busList";

export default async function BusPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  return (
    <Suspense fallback={<div>Loading buses...</div>}>
      <BusList search={params} />
    </Suspense>
  );
}
