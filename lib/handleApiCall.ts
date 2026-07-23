import { AxiosError } from "axios";

export async function handleApi<T>(requestFn: () => Promise<T>): Promise<T> {
  try {
    const res = await requestFn();
    return res;
  } catch (err) {
    console.error("API Call Error:", err);

    if (err instanceof AxiosError) {
      const serverMessage = err.response?.data?.message;
      const statusCode = err.response?.status;

      throw new Error(
        serverMessage ||
          `Request failed with status code ${statusCode || "Unknown"}`,
      );
    }

    throw new Error("An unexpected error occurred.");
  }
}
