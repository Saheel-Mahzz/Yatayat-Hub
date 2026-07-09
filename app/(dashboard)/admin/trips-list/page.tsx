import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import Trips from "@/modules/trips";
import TripsList from "@/modules/tripsList";

export default function page() {
  return <TripsList />;
}
