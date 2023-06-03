import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import uuid from "react-uuid";

const initialState = {
  list: [],
  newList: {},
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
        { iNom: "Iн=2000A" },
        { breakCurrent: "Росцепитель=8000A" },
        { other: "Расч-й ток=1440А" },
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
      // console.log(action.payload);
      let x = state.data.find((el) => el.cell === action.payload);

      if (x) {
        console.log(x);

        state.list.push(x);
      } else {
        false;
        // Результат равен undefined
        // Обработка отсутствия соответствующего элемента в массиве
      }
    },
    destr(state, action) {
      let x = action.payload;
      for (const key in x) {
        let el = x[key];

        const { id, cell } = el;
        state.newList = { id, cell };
      }
    },
  },
});
export const { nCell, destr } = substation.actions;
export default substation.reducer;
