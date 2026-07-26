"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error("Bus Route Error:", error);
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="w-full min-h-[380px] flex items-center justify-center p-4">
      <Card className="max-w-xl w-full border border-dashed border-red-200 bg-red-50/30 dark:bg-red-950/10 shadow-none rounded-2xl transition-all">
        <CardContent className="flex flex-col items-center text-center p-8 sm:p-10 space-y-5">
          {/* Subtle Layered Icon Badge */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-16 h-16 bg-red-100 rounded-full animate-pulse opacity-60" />
            <div className="relative h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 border border-red-100 shadow-sm flex items-center justify-center">
              <AlertCircle className="h-7 w-7 text-red-500" />
            </div>
          </div>

          {/* Heading & Subtext */}
          <div className="space-y-1.5 max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              Yatayat Trips Fetch Huna Sakena
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {error?.message ||
                "Internet connection check garnuhos wa system refresh garnuhos."}
            </p>
          </div>

          {/* Action Buttons Container */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto min-w-[200px]">
            <Button
              onClick={handleRetry}
              disabled={isPending}
              size="lg"
              className="w-full sm:w-auto h-11 px-6 rounded-xl bg-black hover:bg-gray-800 text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${isPending ? "animate-spin text-gray-300" : ""}`}
              />
              {isPending ? "Retrying..." : "Feri Try Garnuhos"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
