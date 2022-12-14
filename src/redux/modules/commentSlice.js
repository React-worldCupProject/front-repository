import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};
// 완성된 Thunk 함수
//서버에서 date를 가져와 달라고 요청(비동기 처리)
export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/post`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("데이터를 불러오지 못했습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const { data } = await axios.post(`http://localhost:3001/post`, payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("데이터를 불러오지 못했습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
      console.log(action);
    });
    builder.addCase(__getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__postPost.fulfilled, (state, action) => {
      console.log(action.payload);
      state.post(action.payload);
    });
  },
});
export const {} = postSlice.actions;
export default postSlice.reducer;
