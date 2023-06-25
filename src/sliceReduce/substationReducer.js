import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import uuid from "react-uuid";

const initialState = {
  list: [],
  newList: {},
  data: [
    {
      cell: 2,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=320А" },
        { path: "РП-5 ,РП-3" },
        { p: "263" },
      ],
    },
    {
      cell: 3,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4СВ" },
        { iNom: "Iн=120A" },
        { breakCurrent: "Росцепитель=960A" },
        { other: "Расч-й ток=110А" },
        { path: "ШУ и7пролет" },
        { p: "75.5" },
      ],
    },
    {
      cell: 4,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4CВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=150А" },
        { path: "ЩО-7пр,ЩО 6-пр" },
        { p: "75" },
      ],
    },
    {
      cell: 5,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=250A" },
        { breakCurrent: "Росцепитель=2000A" },
        { other: "Расч-й ток=96А" },
        { path: "РП-5 ,РП-3" },
        { p: "179" },
      ],
    },
    {
      cell: 6,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4СВ" },
        { iNom: "Iн=200A" },
        { breakCurrent: "Росцепитель=1600A" },
        { other: "Расч-й ток=180А" },
        { path: "Руб-22" },
        { p: "100" },
      ],
    },
    {
      cell: 7,
      id: uuid(),
      description: [
        // { id: uuid() },
        // { type: "АВМ-4СВ" },
        // { iNom: "Iн=200A" },
        // { breakCurrent: "Росцепитель=1600A" },
        // { other: "Расч-й ток=180А" },
        { path: "??" },
        // { p: "100" },
      ],
    },
    {
      cell: "section",
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ20-4СВ" },
        { iNom: "Iн=1500A" },

        { path: "Секционный" },
      ],
    },
    {
      cell: 8,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ20-СВ" },
        { iNom: "Iн=800A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=431А" },
        { path: "РП-10 ,РП-14" },
        { p: "478" },
      ],
    },
    {
      cell: 9,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "Ва55-41" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=1764A" },
        { other: "Расч-й ток=140А" },
        { path: "РП-17 ,РП-18,ШУ-1" },
        { p: "135" },
      ],
    },
    {
      cell: 10,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=250А" },
        { path: "РП-1" },
        { p: "172.6" },
      ],
    },
    {
      cell: 11,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },

        { path: "Резерв" },
      ],
    },
    {
      cell: 12,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=210А" },
        { path: "РП-2" },
        { p: "112.4" },
      ],
    },
    {
      cell: 13,
      id: 2,
      description: [
        { id: 2 },
        { type: "АВМ-4НВ" },
        { iNom: "Iн=400A" },
        { breakCurrent: "Росцепитель=3200A" },
        { other: "Расч-й ток=210А" },
        { path: "РП-4 ,РП-9,РУБ-32" },
        { p: "241.8" },
      ],
    },
    {
      cell: 14,
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "Ва55-41" },
        { iNom: "Iн=1000A" },
        { breakCurrent: "Росцепитель=3150A" },

        { path: "Резерв" },
      ],
    },

    {
      cell: "t1",
      id: uuid(),
    },
    { cell: "t2", id: uuid() },
    {
      cell: "avm1",

      description: [
        { id: uuid() },
        { type: "АВМ-20СВ" },
        { iNom: "Iн=2000A" },
        { breakCurrent: "Росцепитель=8000A" },
        { other: "Расч-й ток=1440А" },
      ],
    },
    {
      cell: "avm2",
      id: uuid(),
      description: [
        { id: uuid() },
        { type: "АВМ-20СВ" },
        { iNom: "Iн=2000A" },
        { breakCurrent: "Росцепитель=8000A" },
        { other: "Расч-й ток=1440А" },
      ],
    },
    {
      cell: "vnt1",
      id: uuid(),
      description: [
        { other: "Расч-й ток 96.3" },
        { path: "Ввод 6Кв кП-4  яч-3 " },
      ],
    },
    {
      cell: "vnt2",
      id: uuid(),
      description: [
        { other: "Расч-й ток 96.3" },
        { path: "Ввод 6Кв кП-4 яч-13" },
      ],
    },
  ],
};
const substation = createSlice({
  name: "substation",
  initialState,
  reducers: {
    nCell(state, action) {
      let x = state.data.find((el) => el.cell == action.payload);
      if (x && Array.isArray(x.description)) {
        state.list = [...x?.description];
      } else {
        console.log(...x?.description);
      }
    },

    destr(state, action) {
      let x = action.payload;
      for (const key in x) {
        let el = x[key];
        const { id, cell, description } = el;
        state.newList = { id, cell, description };
      }
    },
  },
});
export const { nCell, destr } = substation.actions;
export default substation.reducer;
