import { Seat } from "./seat";

export interface Order {
  sessionId: number;
  buy_seats: Seat[];
}
