import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "../Posts/postsSlice";

export const store = configureStore({
  reducer: {
    counterData: counterReducer,
    todosData: todoReducer,
  },

  devTools: true,
});
