import { Seat } from "./seat";

export interface OrderData {
  seatId: number;
  buy_seats: Seat[];
}
