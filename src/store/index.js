import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../sliceReduce/employeesSlice";
import tableReducer from "../sliceReduce/tableSlice";
const store = configureStore({
  reducer: {
    job: employeesReducer,
    hoist: tableReducer,
  },
});
export default store;
