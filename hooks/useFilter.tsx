import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFilter() {
  const search = useSearchParams();
  const params = new URLSearchParams(search);
  const pathname = usePathname();
  const router = useRouter();
  const handleFilterChange = (key: string, value: string) => {
    params.delete("page");
    const currentValue = params.get(key);
    if (currentValue == value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    router.push(`${pathname}`, { scroll: false });
  };
  return {
    handleFilterChange,
    resetFilters,
  };
}
