import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	data833: [
		{
			mainEngine: {
				engineName: 'вращение фрез',
				Engine_rpm: '975 Об',
				power: '18,5kw',
				Motor_starterA1: 'A1:KM4,A2:KM5',

				CircuitBreaker: 'A1:QF13,A2:QF14',
			},
		},
	],
}
const engine = createSlice({
	name: 'engine',
	initialState,
	redusers: {
		engine833(state, action) {},
	},
})
export const { engine833 } = engine.actions
export default engine.reducer
