import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
}

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		one(state, action) {
			state.list.push({
				id: new Date().toISOString(),
				title: action.payload,
			})
		},
	},
})
export const { one } = employeesSlice.actions
export default employeesSlice.reducer
