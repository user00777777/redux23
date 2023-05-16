import { createSlice } from "@reduxjs/toolkit";
import React from "react";
let id = new Date().toLocaleString();

const initialState = {
  data: [
    { cell: 2, id: id },
    { cell: 3, id: id },
    { cell: 4, id: id },
    { cell: 5, id: id },
    { cell: 6, id: id },
    { cell: 7, id: id },
    { cell: 8, id: id },
    { cell: 9, id: id },
    { cell: 10, id: id },
    { cell: 11, id: id },
    { cell: 13, id: id },
    { cell: 14, id: id },
    { cell: "t1", id: id },
    { cell: "t2", id: id },
    { cell: "avm", id: id },
    { cell: "avm", id: id },
    { cell: "vnt", id: id },
    { cell: "vnt", id: id },
  ],
};
const substation = createSlice({
  name: "substation",
  initialState,
  reducers: {},
});
const {} = substation.actions;
export default substation.reducer;
