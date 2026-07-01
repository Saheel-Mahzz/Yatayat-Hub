export interface IBusTrip {
  from_location: string;
  id: string;
  bus_type: string;
  to_location: string;
  bus: {
    name: string;
    total_seats: string;
    number_plate: string;
  };
  price: string;
}

export interface ILocation {
  id: string;
  name: string;
}

export interface ILocationResponse {
  count: number;
  next: string;
  previous: string;
  results: ILocation[];
}
