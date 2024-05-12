import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../sliceReduce/employeesSlice'
import tableReducer from '../sliceReduce/tableSlice'
import machineReducer from '../sliceReduce/machineReduser'
import substationReducer from '../sliceReduce/substationReducer'
import gate from '../sliceReduce/sliceGates'
import craneReduser from '../sliceReduce/cranesReduser'
import rpReduser from '../sliceReduce/rpReduser'
import engineREduser from '../sliceReduce/engineREduser'
import dutyReducer from '../sliceReduce/dutyReducer'
import paintReducer from '../sliceReduce/paintingReducer'

const store = configureStore({
	reducer: {
		job: employeesReducer,
		hoist: tableReducer,
		mashine: machineReducer,
		tp32: substationReducer,
		gates: gate,
		cranes: craneReduser,
		rp: rpReduser,
		engine: engineREduser,
		duty: dutyReducer,
		paint: paintReducer,
	},
})
export default store
