import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../sliceReduce/employeesSlice";
import tableReducer from "../sliceReduce/tableSlice";
import machineReducer from "../sliceReduce/machineReduser";
import substationReducer from "../sliceReduce/substationReducer";
import tp from "../sliceReduce/sliceTrain";
const store = configureStore({
  reducer: {
    job: employeesReducer,
    hoist: tableReducer,
    machine: machineReducer,
    tp32: substationReducer,
    train: tp,
  },
});
export default store;
