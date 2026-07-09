import Sidebar from "@/components/dashboard/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
