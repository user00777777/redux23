import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    { id: 2, name: "i am  asuperman" },
    { id: 1, name: "i amnot a superman i am hulk" },
  ],
};

const machine = createSlice({
  name: "machine",
  initialState,
  reducers: {},
});
export const {} = machine.actions;
export default machine.reducer;
