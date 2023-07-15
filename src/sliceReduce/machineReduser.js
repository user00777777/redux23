import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      machine: "Клепка",
      idMachine: "№52131",

      id: 7,
    },
    {
      machine: "Клепка",
      idMachine: "№52155",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№51791",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№51814",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№51910",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№51110",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№51109",

      id: 1,
    },
    {
      machine: "2А554",
      idMachine: "№52035",

      id: 2,
    },
    {
      machine: "2А554",
      idMachine: "№5268",

      id: 3,
    },
    {
      machine: "2А554",
      idMachine: "№51773",

      id: 3,
    },
    {
      machine: "2Н55",
      idMachine: "№1705",

      id: 3,
    },
    {
      src: "../images/mashineFoto/rad/rad2A554.jpg",
      machine: "2А554",
      idMachine: "№51824",

      id: 3,
    },
    {
      machine: "2А554",
      idMachine: "№51819",

      id: 3,
    },
    {
      machine: "2Н55",
      idMachine: "№11917",

      id: 3,
    },
    {
      machine: "2Н55",
      idMachine: "№2653",

      id: 3,
    },
  ],
  result: [],
};

const machine = createSlice({
  name: "machine",
  initialState,
  reducers: {
    mashineGet(state, action) {
      // console.log(action.payload);
      state.data.find((el) => {
        let regexp = new RegExp(`${el.idMachine}$`);
        console.log(action.payload);

        if (regexp.test(action.payload)) {
          console.log(1111111);
          let lentH = state.result.length;

          if (state.result.length >= 1) {
            state.result.shift();
          }
          return state.result.push({ el });

          state.result.myMachine.push(el.machine);
        } else {
          console.log("no");
        }
      });
    },
  },
});
export const { mashineGet } = machine.actions;
export default machine.reducer;
