import { createSlice } from "@reduxjs/toolkit";

// react toolkit에서는 Action Creator, Action Value 부분이 없어졌음.

const initialState = {
  pathname: "",
};

const counterSlice = createSlice({
  name: "pathname",
  initialState,
  reducers: {
    //reducers가 자동으로  Action Creator가 됨.
    //또한  Action Value 역시도 자동으로 함수의 이름을 따서 생성됨.
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
