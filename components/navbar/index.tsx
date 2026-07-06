"use client";

import { Button } from "@/components/ui/button";
import { Ticket, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import useAuth from "@/context/authContext";
import { useState } from "react";
import { AuthBookingDialog } from "@/modules/tripDetails/components/seats/authBookingDialog";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleTicketNavigation = () => {
    router.push("/my-bookings/");
  };
  console.log("state", open);
  return (
    <header className=" w-full z-50 bg-green-400 ">
      <div className="backdrop-blur-md bg-red/60 border-b border-white/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* LEFT */}
          <div className="text-lg font-bold text-green-700">Yatayat Hub</div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* My Ticket */}
            <Button
              variant="ghost"
              onClick={handleTicketNavigation}
              className="flex items-center gap-2 text-gray-700 cursor-pointer"
            >
              <Ticket size={18} />
              My Ticket
            </Button>

            {/* Profile */}

            {/* <Avatar className="cursor-pointer">
                {is}
              <AvatarFallback className="bg-green-600 text-white">
                U
              </AvatarFallback>
            </Avatar> */}

            {isLoggedIn ? (
              <button className="bg-green-600 text-white cursor-pointer rounded-full px-3 py-1">
                {/* <User /> */}S
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="bg-green-600 text-white cursor-pointer rounded-full p-1"
              >
                <User />
              </button>
            )}

            {/* <Avatar
              className="bg-green-600 text-white cursor-pointer"
              //   onClick={() => {
              //     setOpen(true);
              //   }}
            > */}
            {/* <AvatarFallback className="bg-green-600 text-white">
                {isLoggedIn ? <User /> : "U"}
              </AvatarFallback> */}
            {/* <AvatarFallback
                className="bg-green-600 text-white"
                onClick={() => setOpen(true)}
              >
                <User />
              </AvatarFallback> */}

            {/* <AvatarFallback className="bg-green-600 text-white">
                <User />
              </AvatarFallback>
            </Avatar> */}
            <AuthBookingDialog
              isOpen={open}
              onAuthSuccess={() => {}}
              onOpenChange={setOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
