import { createAppSlice } from "@/lib/store/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NavItem } from "@/interfaces/navigation/menu-items";
import { getApiBaseUrl } from "@/utils/helpers";

export interface NavigationSliceState {
  nav_items: NavItem[];
  admin_navs: NavItem[];
  navItems: NavItem[];
  mainNavs: NavItem[];
  subNavs: NavItem[];
  status: "idle" | "loading" | "failed";
  profileNavs: NavItem[];
  myProzNavs: NavItem[];
  showPseudoPopup: boolean;
}

const initialState: NavigationSliceState = {
  nav_items: [],
  admin_navs: [],
  status: "idle",
  mainNavs: [],
  subNavs: [],
  profileNavs: [],
  myProzNavs: [],
  navItems: [],
  showPseudoPopup: false,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const navigationSlice = createAppSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setNavigationSliceBits: create.reducer(
      (state, action: PayloadAction<{ bitToSet: keyof NavigationSliceState; value: any }>) => {
        const { bitToSet, value } = action.payload;
        // @ts-ignore
        state[bitToSet] = value; // Update the specific bit
      }
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    getNavItemsAsync: create.asyncThunk(
      async () => {
        const url = getApiBaseUrl("nav-links");
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
        });
        const result = await response.json();
        return result;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.nav_items = action.payload;
          state.navItems = action.payload;
          if (Array.isArray(action.payload)) {
            state.mainNavs = action.payload.filter((nav: any) => nav.location == "header");
            state.admin_navs = action.payload.filter((nav: any) => nav.location == "admin");
            state.subNavs = action.payload.filter((nav: any) => nav.location == "sub");
            state.profileNavs = action.payload.filter((nav: any) => nav.location == "profile");
            state.myProzNavs = action.payload.filter((nav: any) => {
              const parentIds = nav.parent_ids.split(",").map((id: string) => parseInt(id));
              return parentIds.includes(790);
            });
          } else {
            state.mainNavs = [];
            state.admin_navs = [];
            state.subNavs = [];
            state.profileNavs = [];
            state.myProzNavs = [];
          }
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
});

// Action creators are generated for each case reducer function.
export const { setNavigationSliceBits, getNavItemsAsync } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;
