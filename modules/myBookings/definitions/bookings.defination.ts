import { ITripDetails } from "@/modules/tripDetails/definitions/tripDetails";

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IBooking {
  trip: ITripDetails;
  seat_number: string;
  isTicketModelOpen: boolean;
  setIsTicketModelOpen: (type: boolean) => void;
  booked_at: string;
  user: IUser;
}

export interface IBookingResponse {
  count: number;
  next: string;
  prev: string;
  results: IBooking[];
}
