import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      machine: "Клепка",
      idMachine: "№52131",

      id: 1,
    },
    {
      machine: "Клепка",
      idMachine: "№52155",

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
