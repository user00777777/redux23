import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [[{ machine: "052068" }, { machine: 11 }]],
};

const machine = createSlice({
  name: "machine",
  initialState,
  reducers: {},
});
export const {} = machine.actions;
export default machine.reducer;
