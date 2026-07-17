"use client";

import { Button } from "@/components/ui/button";
import { Bus, Ticket, User } from "lucide-react";
import useAuth from "@/context/authContext";
import { useEffect, useState } from "react";
import { AuthBookingDialog } from "@/modules/tripDetails/components/seats/authBookingDialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { MyTokenPayload } from "@/proxy";

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
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decoded = jwtDecode<MyTokenPayload>(token);
        setTimeout(() => {
          setIsAdmin(decoded.is_superuser); // dynamic process queue ma pathaune
        }, 0);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);
  // const [isAdmin, setIsAdmin] = useState<boolean>(() => {
  //   // Client side (browser) ma chhas ki nai check garne
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("access_token");
  //     if (token) {
  //       try {
  //         const decoded = jwtDecode<MyTokenPayload>(token);
  //         return decoded.is_superuser; // direct initial state setup!
  //       } catch (e) {
  //         return false;
  //       }
  //     }
  //   }
  //   return false; // token chaina bhane by default false
  // });

  // useEffect(() => {
  //   // 1. Browser ma matra localStorage hunchha, tya bata token line
  //   const token = localStorage.getItem("access_token");

  //   if (token) {
  //     try {
  //       // 2. Clear type safe token decode garne
  //       const decoded = jwtDecode<MyTokenPayload>(token);

  //       // 3. User superuser ho bhane state lai true handine
  //       setIsAdmin(decoded.is_superuser);
  //     } catch (error) {
  //       console.error("Invalid token:", error);
  //     }
  //   }
  // }, []);
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

            {isAdmin ? (
              <Link
                href="/admin/buses/"
                className="text-gray-700 space-x-2 flex gap-2 items-center"
              >
                <Bus size={18} />
                Manage Trips & Buses
              </Link>
            ) : (
              <Button
                variant="ghost"
                // onClick={isLoggedIn ? handleTicketNavigation : setOpen(true)}
                onClick={handleTicketNavigation}
                className="flex items-center gap-2 text-gray-700 cursor-pointer"
              >
                <Ticket size={18} />
                My Ticket
              </Button>
            )}

            {/* Profile */}

            {/* <Avatar className="cursor-pointer">
                {is}
              <AvatarFallback className="bg-green-600 text-white">
                U
              </AvatarFallback>
            </Avatar> */}
            <button
              className="bg-green-600 text-white cursor-pointer rounded-full px-3 py-1"
              onClick={handleProfileClick}
            >
              {isLoggedIn ? "S" : <User />}
            </button>

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
