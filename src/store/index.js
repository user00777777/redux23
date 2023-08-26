import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../sliceReduce/employeesSlice";
import tableReducer from "../sliceReduce/tableSlice";
import machineReducer from "../sliceReduce/machineReduser";
import substationReducer from "../sliceReduce/substationReducer";
import gate from "../sliceReduce/sliceGates";
const store = configureStore({
  reducer: {
    job: employeesReducer,
    hoist: tableReducer,
    mashine: machineReducer,
    tp32: substationReducer,
    gates: gate,
  },
});
export default store;
