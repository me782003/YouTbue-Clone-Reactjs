import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Get all posts
export const getAllTodos = createAsyncThunk("todos/getAll", async (url, thunkAPI) => {
  console.log(thunkAPI);
  const {rejectWithValue} = thunkAPI;
  try{

    const res = await axios.get(url);
    return res.data;

  } catch(err) {
    console.log(err)
    return rejectWithValue(err.message)
  }
});

//----------------------------------------------------










