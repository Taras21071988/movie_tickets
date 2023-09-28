import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderState {
  seats: number[];
}

const initialState: OrderState = {
  seats: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<number>) => {
      state.seats.push(action.payload);
    },
    deleteSeat: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const filteredSeat = state.seats.filter((seat) => seat !== id);
      state.seats = filteredSeat;
    },
    clearOrder: (state) => {
      state.seats = [];
    },
  },
});

export const { addSeat, deleteSeat, clearOrder } = orderSlice.actions;
export const { reducer: orderReducer } = orderSlice;
