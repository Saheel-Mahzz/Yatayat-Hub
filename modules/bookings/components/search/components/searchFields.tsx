import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface ISearchFields {
  label: string;
  placeholder: string;
}

export default function SearchFields({ label, placeholder }: ISearchFields) {
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 w-full">
      <MapPin className="w-4 h-4 text-gray-500" />
      <div className="flex flex-col w-full">
        <span className="text-xs text-gray-500">{label}</span>
        <Input
          placeholder={placeholder}
          className="border-0 p-0 h-6 focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
