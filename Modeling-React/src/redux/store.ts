import { configureStore } from "@reduxjs/toolkit";
import simpleReducer from './simpleSlice'
const store = configureStore({
  reducer: {
    posts: simpleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
