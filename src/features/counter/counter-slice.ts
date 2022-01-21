// DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      state.value++; // immer(= internal library) makes it immutable
    },
    // decrement
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
