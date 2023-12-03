import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTodos } from "./api/postsApi";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  //extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state, action) => {
        console.log(action);
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export default todosSlice.reducer;
