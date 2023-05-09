import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../sliceReduce/employeesSlice";
import tableReducer from "../sliceReduce/tableSlice";
import machineReducer from "../sliceReduce/machineReduser";
import substationReducer from "../sliceReduce/substationReducer";

const store = configureStore({
  reducer: {
    job: employeesReducer,
    hoist: tableReducer,
    machine: machineReducer,
    tp32: substationReducer,
  },
});
export default store;
