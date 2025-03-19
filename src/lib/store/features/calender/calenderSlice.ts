import { CalendarEvent } from "@/constants/calender";
import { createAppSlice } from "@/lib/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CalenderSliceState {
  status: "idle" | "loading" | "failed";
  currentMonth: number;
  events: CalendarEvent[];
  currentYear: number;
  currentMonthName: string;
}

const initialState: CalenderSliceState = {
  status: "idle",
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentMonthName: new Date().toLocaleString("default", { month: "long" }),
  events: [],
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const calenderSlice = createAppSlice({
  name: "calender",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setCalenderSliceBits: create.reducer(
      (state, action: PayloadAction<{ bitToSet: keyof CalenderSliceState; value: any }>) => {
        const { bitToSet, value } = action.payload;
        // @ts-ignore
        state[bitToSet] = value; // Update the specific bit
      }
    ),
    setCalenderEvents: create.reducer((state, action: PayloadAction<CalendarEvent[]>) => {
      // @ts-ignore
      state.events = action.payload; // Update the specific bit
    }),
  }),
});

export const { setCalenderSliceBits, setCalenderEvents } = calenderSlice.actions;
export const calenderReducer = calenderSlice.reducer;
