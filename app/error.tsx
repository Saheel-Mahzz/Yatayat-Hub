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
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <Card className="max-w-md w-full shadow-sm">
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>

          <CardTitle className="text-xl">Cannot Load Trips</CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-5">
          <p className="text-sm text-muted-foreground">
            {error.message || "Something went wrong while loading trips."}
          </p>

          <Button onClick={handleRetry} disabled={isPending} className="w-full">
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isPending ? "animate-spin" : ""}`}
            />

            {isPending ? "Retrying..." : "Feri Try Garnuhos"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
