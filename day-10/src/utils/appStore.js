import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//reducer here
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
