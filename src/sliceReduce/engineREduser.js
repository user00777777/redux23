import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	data833: [
		{
			name: 'СБ833',
			mainEngine: {
				nameEng: 'Вращение фрез',
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
				nameEng: 'Гидростанция',
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
		{
			name: '2А554',
			mainEngine: {
        nameEng:'Привод охлаждения',
				engineName: 'привод охлаждения',
				Engine_rpm: '2800 об',
				power: '0.125',
				// Motor_starterA1: 'A1:KM4,A2:KM5',
				// cosF: 0.87,
				CircuitBreaker: 'Q2',
				motorShaft: '180mm',
				// weight: '160кг',
				// electricCurrent: '36A',
				// shaftDiameter: '55mm',
			},
			hydroelectricStation: {
				engineName: 'Привод гидронасоса',
				Engine_rpm: '1500 Об',
				power: '0.55',
				Motor_starterA1: 'К22',
				cosF: false,
				// CircuitBreaker: 'A1:QF13,A2:QF14',
				// motorShaft: '----',
				// weight: '38кг',
				// electricCurrent: '6.8A',
				// shaftDiameter: '28mm',
				// bearing: '6206 ZZ-C3',
			},
			PrivodRukava: {
        nameEng:'Привод рукава',
				engineName: 'Привод рукава',
				Engine_rpm: '1500 Об',
				power: '2.2',
				Motor_starterA1: 'К19,K20',
				cosF: false,
				// CircuitBreaker: 'A1:QF13,A2:QF14',
				// motorShaft: '----',
				// weight: '38кг',
				// electricCurrent: '6.8A',
				// shaftDiameter: '28mm',
				// bearing: '6206 ZZ-C3',
			},
		},
	],
	result: null,
}
const engine = createSlice({
	name: 'engine',
	initialState,
	reducers: {
		engine833(state, action) {
			console.log(action.payload)
			state.result = null
			if (state.result == null) {
				const filteredResults = state.data833.filter(el => {
					if (el.name === action.payload) {
						return el
					}
				})
				state.result = filteredResults
			}
			// else{state}
		},
	},
})
export const { engine833 } = engine.actions
export default engine.reducer
