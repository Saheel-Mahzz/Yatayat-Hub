import { Bus, Route, Map } from "lucide-react";

import Link from "next/link";

const menu = [
  {
    title: "Buses",
    icon: Bus,
    href: "/admin/buses",
  },
  {
    title: "Trips",
    icon: Route,
    href: "/admin/trips-list",
  },
  {
    title: "Location",
    icon: Map,
    href: "/admin/locations",
  },
  //   {
  //     title: "Bookings",
  //     icon: Ticket,
  //     href: "/admin/bookings",
  //   },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-5">
      <h1 className="text-xl font-bold mb-8">Yatayat Hub</h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted"
            >
              <Icon className="h-5 w-5" />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
