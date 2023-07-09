import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      link: "https://photos.app.goo.gl/umMPXYs8beFYhgwj8",
    },
  ],
};

const machine = createSlice({
  name: "machine",
  initialState,
  reducers: {},
});
export const {} = machine.actions;
export default machine.reducer;
