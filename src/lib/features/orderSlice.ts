import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  orderID: string | null;
}

const initialState: OrderState = {
  orderID: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderID: (state, action: PayloadAction<string>) => {
      state.orderID = action.payload;
    },
    clearOrderID: (state) => {
      state.orderID = null;
    },
  },
});

export const { setOrderID, clearOrderID } = orderSlice.actions;
export default orderSlice.reducer;
