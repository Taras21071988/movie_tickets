import { createSlice } from "@reduxjs/toolkit";

interface OrderState {
  seats: number[];
}

const initialState: OrderState = {
  seats: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});
export const { reducer: orderReducer } = orderSlice;
