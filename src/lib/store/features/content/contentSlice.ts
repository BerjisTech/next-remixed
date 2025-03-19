import { PortfolioEntry, Project } from "@/interfaces/account";
import { createAppSlice } from "@/lib/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentSliceState {
  showDrawerProfile: boolean;
  showMissedCallsDrawer: boolean;
  status: "idle" | "loading" | "failed";
  updaterSection: string;
  showDrawerPh: boolean;
  showMegaMenu: boolean;
  showDrawerSamples: boolean;
  showDrawerReview: boolean;
  showFeedbackModal: boolean;
  showCareersDrawer: boolean;
  refetchSamples: boolean;
  refetchPh: boolean;
  project: Project | null;
  sample: PortfolioEntry | null;
}

const initialState: ContentSliceState = {
  status: "idle",
  updaterSection: "Profile Updater",

  // Bit to open/close drawers
  showFeedbackModal: false,
  showDrawerProfile: false,
  showMissedCallsDrawer: false,
  showDrawerReview: false,
  showDrawerPh: false,
  showDrawerSamples: false,
  showMegaMenu: false,
  showCareersDrawer: false,

  // Bits to set to reerect data from react toolkit query
  refetchPh: false,
  refetchSamples: false,
  // Data to set here to edit
  project: null,
  sample: null,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const contentSlice = createAppSlice({
  name: "content",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setContentSliceBits: create.reducer(
      (state, action: PayloadAction<{ bitToSet: keyof ContentSliceState; value: any }>) => {
        const { bitToSet, value } = action.payload;
        // @ts-ignore
        state[bitToSet] = value; // Update the specific bit
      }
    ),
  }),
});

export const { setContentSliceBits } = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
