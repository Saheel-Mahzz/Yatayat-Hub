import Bookings from "@/modules/bookings";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = await searchParams;
  console.log("search page", search);
  return <Bookings searchParams={search} />;
}
