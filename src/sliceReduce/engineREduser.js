import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	data833: [
		{
			name: {
				name: 'СБ833',
			},
			mainEngine: {
				engineName: 'вращение фрез( 4АМ180М6)',
				Engine_rpm: '975 Об',
				power: '18,5kw',
				Motor_starterA1: 'A1:KM4,A2:KM5',
				cosF: 0.87,
				CircuitBreaker: 'A1:QF13,A2:QF14',
				motorShaft: '180mm',
				weight: '160кг',
				electricCurrent: '36A',
				shaftDiameter: '55mm',
			},
			hydroelectricStation: {
				engineName: 'Гидростанция( АИР100S4)',
				Engine_rpm: '1410 Об',
				power: '3kw',
				Motor_starterA1: 'A1:KM4,A2:KM5',
				cosF: false,
				CircuitBreaker: 'A1:QF13,A2:QF14',
				motorShaft: '----',
				weight: '38кг',
				electricCurrent: '6.8A',
				shaftDiameter: '28mm',
				bearing: '6206 ZZ-C3',
			},
		},
	],
}
const engine = createSlice({
	name: 'engine',
	initialState,
	reducers: {
		engine833(state, action) {
			state.data833.forEach(el => {
				if (el.name.name == action.payload) {
					console.log(el.name.name)

				
				} else {
					return state
				}
			})

			action.payload
		},
	},
})
export const { engine833 } = engine.actions
export default engine.reducer
