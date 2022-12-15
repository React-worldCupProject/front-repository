import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// react toolkit에서는 Action Creator, Action Value 부분이 없어졌음.

const initialState = {
  post: [],
  comments: [],
  isLoading: false,
  error: null,
};

export const __getpost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://serverjson-phi.vercel.app/post`);
      //       const posttlist = post.find((post) => {
      //   return post.id === Number(id);
      // });
      return thunkAPI.fulfillWithValue(data.data);

      // console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("데이터를 불러오지 못했습니다.");
    }
  }
);

export const __postPOst = createAsyncThunk("postPost", async (payload) => {
  "postPOst";
  try {
    await axios.post("https://serverjson-phi.vercel.app/post", payload);
    console.log(payload);
  } catch (error) {
    console.log(error);
  }
});

export const __changePost = createAsyncThunk(
  "changePost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `https://serverjson-phi.vercel.app/post/${payload.id}`,
        payload
      );
      //
      // });
      return thunkAPI.fulfillWithValue(data.data);

      // console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("데이터를 불러오지 못했습니다.");
    }
  }
);

export const __DeletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://serverjson-phi.vercel.app/post/${payload}`
      );
      //       const posttlist = post.find((post) => {
      //   return post.id === Number(id);
      // });
      return thunkAPI.fulfillWithValue(data.data);

      // console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("데이터를 불러오지 못했습니다.");
    }
  }
);

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://serverjson-phi.vercel.app/comments`
      );
      console.log(data.data);
      // console.log(data.data.filter((comment) => comment.postId === payload));
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)

      return thunkAPI.fulfillWithValue(data.data); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComments = createAsyncThunk(
  "postComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `https://serverjson-phi.vercel.app/comments`,
        payload
      );
      console.log(data.data);
      // console.log(data.data.filter((comment) => comment.postId === payload));
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)

      return thunkAPI.fulfillWithValue(data.data); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log("댓글 달기에 에러가 발생했습니다.");
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __DeleteComments = createAsyncThunk(
  "deleteComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `https://serverjson-phi.vercel.app/comments/${payload}`
      );
      // console.log(data.data);
      // console.log(data.data.filter((comment) => comment.postId === payload));
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)

      return thunkAPI.fulfillWithValue(data.data); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatecomment = createAsyncThunk(
  "updatecomment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `https://serverjson-phi.vercel.app/comments/${payload.id}`,
        payload
      );
      //댓글 처리 성공했을 때
      // const posttlist = post.find((post) => {
      //  return post.id === Number(payload.id))}
      return thunkAPI.fulfillWithValue(data.data);

      // console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("데이터를 불러오지 못했습니다.");
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: {
    [__getpost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getpost.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getpost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //post change
    [__changePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__changePost.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__changePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //post delete
    [__DeletePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__DeletePost.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__DeletePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__postPOst.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postPOst.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postPOst.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //코멘트
    [__getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComments.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__postComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postComments.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__updatecomment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__updatecomment.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__updatecomment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__DeleteComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__DeleteComments.fulfilled]: (state, action) => {
      // console.log(state, action);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__DeleteComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = contentsSlice.actions;

// reducer 는 configStore에 등록하기 위해 export default 합니다.

export default contentsSlice.reducer;
