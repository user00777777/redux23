import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import uuid from "react-uuid";

const initialState = {
  list: [],
  data: [
    { cell: 2, id: uuid() },
    { cell: 3, id: uuid() },
    { cell: 4, id: uuid() },
    { cell: 5, id: uuid() },
    { cell: 6, id: uuid() },
    { cell: 7, id: uuid() },
    { cell: 8, id: uuid() },
    { cell: 9, id: uuid() },
    { cell: 10, id: uuid() },
    { cell: 11, id: uuid() },
    { cell: 13, id: uuid() },
    { cell: 14, id: uuid() },
    {
      cell: "t1",
      id: uuid(),
    },
    { cell: "t2", id: uuid() },
    {
      cell: "avm1",
      id: uuid(),
      description: [
        { type: "АВМ-20СВ" },
        { iNom: "2000A" },
        { breakCurrent: "8000A" },
      ],
    },
    { cell: "avm2", id: uuid() },
    { cell: "vnt", id: uuid() },
    { cell: "vnt", id: uuid() },
  ],
};
const substation = createSlice({
  name: "substation",
  initialState,
  reducers: {
    nCell(state, action) {
      console.log(state.list);
      // console.log(action.payload);
      let x = state.data.find((el) => el.cell === action.payload);

      if (x) {
        state.list.push(x);
      } else {
        false;
        // Результат равен undefined
        // Обработка отсутствия соответствующего элемента в массиве
      }
    },
  },
});
export const { nCell } = substation.actions;
export default substation.reducer;
