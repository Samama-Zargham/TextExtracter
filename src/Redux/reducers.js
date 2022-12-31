/* eslint-disable prettier/prettier */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: null,
};

const Reducers = createSlice({
  name: 'data',
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state, action) => {
      state.userData = null;
    },
  },
});

export const { userData, logOut, } = Reducers.actions;
export default Reducers.reducer;
