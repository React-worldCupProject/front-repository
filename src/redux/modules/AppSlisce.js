import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// react toolkit에서는 Action Creator, Action Value 부분이 없어졌음.

const initialState = {
  post: [],
  comment: [],
  isLoading: false,
  error: null,
};

export const __getpost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/post`);
      return thunkAPI.fulfillWithValue(data.data);
      // console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("데이터를 불러오지 못했습니다.");
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        `http://localhost:3001/post/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const AppSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getpost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getpost.fulfilled]: (state, action) => {
      console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getpost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteComment.fulfilled]: (state, action) => {
      console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post.filter((post) => post?.id !== action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = AppSlice.actions;

// reducer 는 configStore에 등록하기 위해 export default 합니다.

export default AppSlice.reducer;
