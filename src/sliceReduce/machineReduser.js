import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const machine = createSlice({
  name: "machine",
  initialState,
  reducers: {
    mashineGet(state, action) {
      console.log(action.payload);
    },
  },
});
export const { mashineGet } = machine.actions;
export default machine.reducer;
