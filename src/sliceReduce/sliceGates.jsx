import { createSlice } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

const initialState = {
	gates: [
		{ gate: 9, rp: 'РП №14', avt: '32A', engine: '' },
		{ gate: 10, rp: 'РП №10', avt: '10A', engine: '' },
		{ gate: 11, rp: 'РП №4', avt: '16A', engine: '' },
		{ gate: 12, rp: 'РП №3', avt: '16A', engine: '' },
		{ gate: 5, rp: 'РП №5', avt: '63A', engine: 7 },
		{ gate: 3, rp: 'Руб №1', avt: '63A', engine: 7 },
	],
	arrImg: '',
}

const machineSlice = createSlice({
	name: 'machine',
	initialState,
	reducers: {
		imgGate(state, action) {
			for (let key in state) {
				let el = state[key].gate
				if ((el = action.payload)) {
					state.arrImg = ''

					switch (action.payload) {
						case 11:
							state.arrImg = 11

							break

						default:
							break
					}
				}
				console.log(state.arrImg)
			}
		},
	},
})
export const { imgGate } = machineSlice.actions
export default machineSlice.reducer
