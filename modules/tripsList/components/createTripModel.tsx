// "use client";

// import { Button } from "@/components/ui/button";

// import { Input } from "@/components/ui/input";

// import { Label } from "@/components/ui/label";

// import { Plus } from "lucide-react";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useActionState, useEffect, useState } from "react";
// import tripCreateAction from "../actions/createTripAction";
// import InputElement from "@/components/inputFields/inputElement";
// import SearchFields from "@/modules/trips/components/search/components/searchFields";

// interface ICreateTrip {
//   open: boolean;
//   setOpen: (value: boolean) => void;
// }

// export interface ILocation {
//   label: string;
//   value: string;
// }

// const initialState = {
//   success: false,
//   error: null,
//   message: null,
//   data: null,
// };

// export default function CreateTripModel({
//   locations,
// }: {
//   locations: ILocation[];
// }) {
//   const [state, formAction, isPending] = useActionState(
//     tripCreateAction,
//     initialState,
//   );
//   const [fromLocation, setFromLocation] = useState<ILocation | null>(null);
//   const [toLocation, setToLocation] = useState<ILocation | null>(null);
//   useEffect(() => {
//   if (fromLocationId && locationsList) {
//     // Aaba yahan timro locationsList (array) bata item khojne
//     const matchedLocation = locationsList.find(
//       (item) => item.value === fromLocationId
//     );

//     if (matchedLocation) {
//       // Bhetyo bhane state ma haldine!
//       setFromLocation(matchedLocation);
//     }
//   }
// }, [fromLocationId, locationsList]);
//   return (
//     // <Dialog open={open} onOpenChange={setOpen}>

//     <form action={formAction}>
//       <div className="space-y-5 pt-4">
//         <div className="grid grid-cols-2 gap-4">
//           <SearchFields
//             disable={toLocation}
//             label="From Location"
//             locations={locations}
//             name="from_location"
//             onSelect={setFromLocation}
//             placeholder="Select "
//             value={fromLocation}
//           />

//           <SearchFields
//             disable={fromLocation}
//             label="To Location"
//             locations={locations}
//             name="to_location"
//             onSelect={setToLocation}
//             placeholder="Select "
//             value={toLocation}
//           />
//         </div>

//         <div className="space-y-2">
//           <Label>Select Bus</Label>

//           <Select>
//             <SelectTrigger>
//               <SelectValue placeholder="Choose bus" />
//             </SelectTrigger>

//             <SelectContent>
//               <SelectItem value="1">
//                 Mountain Express - BA 2 KHA 1234
//               </SelectItem>

//               <SelectItem value="2">Deluxe Traveller - BA 3 PA 2222</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label>Date</Label>

//             <Input type="date" />
//           </div>

//           <div className="space-y-2">
//             <Label>Time</Label>

//             <Input type="time" />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <InputElement
//             type="number"
//             placeholder="800"
//             label="Price"
//             name="price"
//           />
//         </div>

//         <div className="flex justify-end gap-3 pt-4">
//           <Button variant="outline">Cancel</Button>

//           <Button>Create Trip</Button>
//         </div>
//       </div>
//     </form>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Next.js standard imports
import tripCreateAction from "../actions/createTripAction";
import InputElement from "@/components/inputFields/inputElement";
import SearchFields from "@/modules/trips/components/search/components/searchFields";

interface ICreateTrip {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface ILocation {
  label: string;
  value: string;
}

const initialState = {
  success: false,
  error: null,
  message: null,
  data: null,
};

export default function CreateTripModel({
  locations,
}: {
  locations: ILocation[];
}) {
  const [state, formAction, isPending] = useActionState(
    tripCreateAction,
    initialState,
  );

  // 1. URL search params ra router use garne
  const searchParams = useSearchParams();
  const router = useRouter();

  // 2. URL bata ids line
  const fromLocationId = searchParams.get("from_location");
  const toLocationId = searchParams.get("to_location");

  // 3. Derived State: Direct data match garne (No useEffect, No useState cascading error!)
  const fromLocation =
    locations.find((item) => item.value === fromLocationId) || null;
  const toLocation =
    locations.find((item) => item.value === toLocationId) || null;

  // 4. Jaba user le select component run garchha, URL parameter update gardine function
  const handleLocationChange = (name: string, selected: ILocation | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selected) {
      params.set(name, selected.value);
    } else {
      params.delete(name);
    }
    // URL silent push (bina page refresh url sync)
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <form action={formAction}>
      <div className="space-y-5 pt-4">
        <div className="grid grid-cols-2 gap-4">
          <SearchFields
            disable={toLocation}
            label="From Location"
            locations={locations}
            name="from_location"
            // URL params update garchha array dropdown choose huda
            onSelect={(val) => handleLocationChange("from_location", val)}
            placeholder="Select "
            value={fromLocation}
          />

          <SearchFields
            disable={fromLocation}
            label="To Location"
            locations={locations}
            name="to_location"
            onSelect={(val) => handleLocationChange("to_location", val)}
            placeholder="Select "
            value={toLocation}
          />
        </div>

        <div className="space-y-2">
          <Label>Select Bus</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose bus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">
                Mountain Express - BA 2 KHA 1234
              </SelectItem>
              <SelectItem value="2">Deluxe Traveller - BA 3 PA 2222</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Time</Label>
            <Input type="time" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputElement
            type="number"
            placeholder="800"
            label="Price"
            name="price"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Trip"}
          </Button>
        </div>
      </div>
    </form>
  );
}
