import Trips from "@/modules/trips";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = await searchParams;
  return <Trips searchParams={search} />;
}
