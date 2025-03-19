import { createAppSlice } from "@/lib/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PersonalPreferences, ProzUser } from "@/interfaces/account";
import { Feedback } from "@/constants/common";
import axios from "axios";
import { getApiBaseUrl } from "@/utils/helpers";
import { Languages } from "@/interfaces/content";
import { toast } from "sonner";

export interface ProfileSliceState {
  isAdmin: boolean;
  isPseudo: boolean;
  loggedIn: boolean;
  isAllowedLinkEditors: boolean;
  pseudoUser: ProzUser | null;
  user: ProzUser | null;
  languages: Languages;
  userServices: { [key: number]: string };
  generalFields: { [key: number]: string };
  specificDisciplines: { [key: number]: string };
  outsourceFeedback: Feedback[];
  userGenderPronouns: string[];
  canEdit: boolean;
  status: "idle" | "loading" | "failed";
  entityId: number;
  forceReload: boolean;
  pseudoId: number;
  profPrefs: PersonalPreferences | null;
}

const initialState: ProfileSliceState = {
  isAdmin: false,
  languages: {},
  userServices: {},
  outsourceFeedback: [],
  isPseudo: false,
  loggedIn: false,
  isAllowedLinkEditors: false,
  pseudoUser: null,
  user: null,
  status: "idle",
  userGenderPronouns: [],
  generalFields: {},
  specificDisciplines: {},
  canEdit: false,
  forceReload: false,
  entityId: 0,
  pseudoId: 0,
  profPrefs: null,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const profileSlice = createAppSlice({
  name: "profile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // extraReducers: (builder) => builder.addCase(resetState, () => initialState),
  reducers: (create) => ({
    setProfileSliceBits: create.reducer(
      (state, action: PayloadAction<{ bitToSet: keyof ProfileSliceState; value: any }>) => {
        const { bitToSet, value } = action.payload;
        // @ts-ignore
        state[bitToSet] = value; // Update the specific bit
      }
    ),

    setUserProfile: create.reducer((state, action: PayloadAction<{ user: ProzUser }>) => {
      const { user } = action.payload;
      // @ts-ignore
      state.user = user; // Update the specific bit
    }),
    logOutUser: create.asyncThunk(
      async () => {
        const url = getApiBaseUrl("/", true, { logout: 1 });
        try {
          const response = await axios.get(url, {
            headers: { "Content-Type": "application/json", Accept: "application/json" },
          });
          return response.data;
        } catch (error) {
          return Promise.reject(
            axios.isAxiosError(error)
              ? error.response?.data || error.message
              : "An unexpected error occurred"
          );
        }
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          return initialState;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
    updateGenderPronouns: create.asyncThunk(
      async (data: { [key: string]: string | number }) => {
        const url = getApiBaseUrl("user/gender-pronouns", false);
        try {
          const response = await axios.post(
            url,
            { ...data },
            { headers: { "Content-Type": "application/json", Accept: "application/json" } }
          );
          return response;
        } catch (error) {
          return Promise.reject(
            axios.isAxiosError(error)
              ? error.response?.data || error.message
              : "An unexpected error occurred"
          );
        }
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          toast.success("Gender and pronouns updated successfully!");
        },
        rejected: (state) => {
          state.status = "failed";
          toast.error("Error updating gender and pronouns!");
        },
      }
    ),
  }),
});

// Action creators are generated for each case reducer function.
export const { setProfileSliceBits, setUserProfile, updateGenderPronouns, logOutUser } =
  profileSlice.actions;
export const profileReducer = profileSlice.reducer;
