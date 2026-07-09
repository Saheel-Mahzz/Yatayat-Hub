export interface Buses {
  id: number;
  name: string;
  number_plate: string;
  total_seats: string;
  bus_type: string;
}

export interface BusResponse {
  count: number;
  prev: string;
  next: string;
  results: Buses[];
}
