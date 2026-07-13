"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner"; // ya timile jun toast package use gareko chau

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error === "unauthorized") {
      toast.warning("Permission Denied!");

      // Optional: URL bata tyo fohor query parameter `?error=unauthorized`
      // lai clean garna clean-up route handle garna sakincha.
    }
  }, [error]);

  return null; // Yo component le screen ma kehi print gardaina, khali backend logic matrai run garchha
}
