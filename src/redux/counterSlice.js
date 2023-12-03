import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// create slice

const initialState = {
  count: 0,
  name: "mohamed",
  posts: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne: (state) => {
      state.count ++;
    },
    minusOne: (state) => {
      state.count --;
    },
    setName: (state, action) => {
        state.name = action.payload;
    },
  },

});

export const {addOne, minusOne, setName} = counterSlice.actions;

export default counterSlice.reducer;