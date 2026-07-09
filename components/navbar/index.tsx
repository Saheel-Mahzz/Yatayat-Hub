"use client";

import { Button } from "@/components/ui/button";
import { Ticket, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import useAuth from "@/context/authContext";
import { useState } from "react";
import { AuthBookingDialog } from "@/modules/tripDetails/components/seats/authBookingDialog";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [modelTitle, setModelTitle] = useState<string>("");
  const [modelDesc, setModeDesc] = useState<string>("");
  const router = useRouter();

  const handleTicketNavigation = () => {
    if (isLoggedIn) {
      router.push("/my-bookings/");
    } else {
      setModelTitle("View My Bookings");
      setModeDesc("Please login to view your bookings.");
      setOpen(true);
    }
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push("/profile");
    } else {
      setModelTitle("Welcome Back!");
      setModeDesc("Please login to access your profile.");
      setOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-green-50/80 backdrop-blur-md border-b border-green-100">
      <div className="backdrop-blur-md bg-red/60 border-b border-white/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* LEFT */}
          <Link href="/" className="text-lg font-bold text-green-700">
            Yatayat Hub
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* My Ticket */}
            <Button
              variant="ghost"
              // onClick={isLoggedIn ? handleTicketNavigation : setOpen(true)}
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
              <button
                className="bg-green-600 text-white cursor-pointer rounded-full px-3 py-1"
                onClick={handleProfileClick}
              >
                {/* <User /> */}S
              </button>
            ) : (
              <button
                onClick={handleProfileClick}
                className="bg-green-600 text-white cursor-pointer rounded-full p-1"
              >
                <User />
              </button>
            )}
            <AuthBookingDialog
              isOpen={open}
              onAuthSuccess={handleAuthSuccess}
              onOpenChange={setOpen}
              description={modelDesc}
              title={modelTitle}
            />
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
          </div>
        </div>
      </div>
    </header>
  );
}
