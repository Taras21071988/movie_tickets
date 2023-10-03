import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Seat } from "../types";

interface OrderState {
  seats: Seat[];
}

const initialState: OrderState = {
  seats: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<Seat>) => {
      state.seats.push(action.payload);
    },
    deleteSeat: (state, action: PayloadAction<Seat>) => {
      let {row,seat} = action.payload;
      let filteredSeat = state.seats.filter((data) => data.seat !== seat&&data.row!==row);
      state.seats = filteredSeat;
    },
    clearOrder: (state) => {
      state.seats = [];
    },
  },
});

export const { reducer: orderReducer } = orderSlice;
export const { addSeat, deleteSeat, clearOrder } = orderSlice.actions;
