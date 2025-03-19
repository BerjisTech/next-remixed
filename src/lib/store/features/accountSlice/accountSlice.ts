import { createAppSlice } from "@/lib/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { getApiBaseUrl } from "@/utils/helpers";
import axios from "axios";

export interface AccountSliceState {
  status: "idle" | "loading" | "failed";
}

const initialState: AccountSliceState = {
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const accountSlice = createAppSlice({
  name: "account",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setAccountSliceBits: create.reducer(
      (state, action: PayloadAction<{ bitToSet: keyof AccountSliceState; value: any }>) => {
        const { bitToSet, value } = action.payload;
        // @ts-ignore
        state[bitToSet] = value; // Update the specific bit
      }
    ),
    updatedSettings: create.asyncThunk(
      async (data: { [key: string]: string | number }) => {
        const url = getApiBaseUrl("user/settings", false);
        const response = await axios.post(
          url,
          {
            ...data,
          },
          { headers: { "Content-Type": "application/json", Accept: "application/json" } }
        );
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          toast.success("Notifications settings updated successfully!");
        },
        rejected: (state) => {
          state.status = "failed";
          toast.error("Error updating notifications settings!");
        },
      }
    ),
  }),
});

export const { setAccountSliceBits, updatedSettings } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
