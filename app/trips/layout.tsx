// 1. Mathi timro Navbar component import hunxa

import Navbar from "@/components/navbar";

export default function TripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="trips-container">
      {/* 1. Navbar lai mathi rakhne */}
      <Navbar />

      <main className="trips-content">{children}</main>
    </div>
  );
}
