import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./states/todo";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
