import { ITripDetails } from "@/modules/tripDetails/definitions/tripDetails";

export interface IBooking {
  trip: ITripDetails;
  seat_number: string;
  isTicketModelOpen: boolean;
  setIsTicketModelOpen: (type: boolean) => void;
  booked_at: string;
}

export interface IBookingResponse {
  count: number;
  next: string;
  prev: string;
  results: IBooking[];
}
