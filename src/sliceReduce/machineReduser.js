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
    {
      machine: "СМ2126",
      idMachine: "№52050",

      id: 3,
    },
    {
      machine: "СМ2126",
      idMachine: "52049",

      id: 3,
    },
    {
      machine: "СБ833",
      idMachine: "№52056",

      id: 3,
    },
    {
      machine: "СБ833",
      idMachine: "№52055",

      id: 3,
    },
    {
      machine: "СБ972",
      idMachine: "№52911",

      id: 3,
    },
    {
      machine: "СБ972",
      idMachine: "№52910",

      id: 3,
    },
    {
      machine: "СБ898",
      idMachine: "№052331",

      id: 3,
    },
    {
      machine: "Am19176",
      idMachine: "№52333",

      id: 3,
    },
    {
      machine: "СБ890",
      idMachine: "№52944",

      id: 3,
    },
    {
      machine: "СБ832",
      idMachine: "№052051",

      id: 3,
    },
    {
      machine: "СБ832",
      idMachine: "№52052",

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
