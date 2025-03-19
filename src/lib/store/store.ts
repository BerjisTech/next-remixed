import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./features/navigation/navigationSlice";
import { profileReducer } from "./features/profile/profileSlice";
import { contentReducer } from "./features/content/contentSlice";
import { accountReducer } from "./features/accountSlice/accountSlice";
import { profileApiSlice } from "./features/profile/profileApiSlice";
import { prozpayApiSlice } from "./features/prozpay/prozpayApiSlice";
import { membershipApiSlice } from "./features/membership/membershipApiSlice";
import { kudozApiSlice } from "./features/kudoz/kudozApiSlice";
import { calenderReducer } from "./features/calender/calenderSlice";
import { contentApiSlice } from "./features/content/contentApiSlice";
import { pasteyApiSlice } from "@/lib/store/features/pastey/pasteyApiSlice";
import { mentorsApiSlice } from "@/lib/store/features/mentors/mentorsApiSlice";

// Defining the resetState action here when called all slices listening to this will reset to initial state
// export const resetState = createAction('RESET_ALL');

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineReducers({
  navigation: navigationReducer,
  profile: profileReducer,
  content: contentReducer,
  account: accountReducer,
  calender: calenderReducer,
  [profileApiSlice.reducerPath]: profileApiSlice.reducer,
  [prozpayApiSlice.reducerPath]: prozpayApiSlice.reducer,
  [membershipApiSlice.reducerPath]: membershipApiSlice.reducer,
  [kudozApiSlice.reducerPath]: kudozApiSlice.reducer,
  [contentApiSlice.reducerPath]: contentApiSlice.reducer,
  [pasteyApiSlice.reducerPath]: pasteyApiSlice.reducer,
  [mentorsApiSlice.reducerPath]: mentorsApiSlice.reducer,
});

// const rootReducer = combineSlices();
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        profileApiSlice.middleware,
        prozpayApiSlice.middleware,
        membershipApiSlice.middleware,
        kudozApiSlice.middleware,
        contentApiSlice.middleware,
        pasteyApiSlice.middleware,
        mentorsApiSlice.middleware
      ),
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
