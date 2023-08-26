import { createSlice } from "@reduxjs/toolkit";

class Table {
  constructor(gate, rp, avt, engine) {
    this.gate = gate;
    this.rp = rp;
    this.avt = avt;
    this.engine = engine;
  }
}

const g9 = new Table(9, 14, "32A");
const g10 = new Table(10, 10, "10A");
const g11 = new Table(11, 4, "16A");
const g12 = new Table(12, 3, "16A");
const g13 = new Table(13, 5, "63A", 7, 5);
console.log(g10);

const initialState = {
  g9,
  g10,
  g11,
  g12,
  g13,
};

const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {},
});

export default machineSlice.reducer;
