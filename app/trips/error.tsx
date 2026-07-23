"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

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
      router.refresh(); // Server Component data laai fresh re-fetch garchha
      reset(); // Error boundary state clear garchha
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4 border rounded-lg">
      <h2 className="text-xl font-bold text-red-600">
        Bus haru load garna sakiena!
      </h2>
      <p className="text-gray-600">
        Network issue huna sakchha ya server down chha.
      </p>

      <button
        onClick={handleRetry}
        disabled={isPending}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? "Retrying..." : "Feri Try Garnuhos"}
      </button>
    </div>
  );
}
