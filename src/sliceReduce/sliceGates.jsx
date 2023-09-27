import { createSlice } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
// class Table {
// 	constructor(gate, rp, avt, engine) {
// 		this.gate = gate
// 		this.rp = rp
// 		this.avt = avt
// 		this.engine = engine
// 	}
// 	show() {
// 		return ` <ul> <li> Ворота №${this.gate}</li> <li>Запитано ${this.rp}</li><li>Автомат ${this.avt}</li className={s.f}><li></li></ul>`
// 	}
// }

// const g9 = new Table(9, 'РП №14', '32A')
// const g10 = new Table(10, 'РП №10', '10A')
// const g11 = new Table(11, 'РП №4', '16A')
// const g12 = new Table(12, 'РП №3', '16A')
// const g13 = new Table(13, 'РП №5', '63A', 7)
// const g14 = new Table(3, 'Руб №1', '63A', 7)
// console.log(g10)

const initialState = {
	gates: [
		{ gate: 9, rp: 'РП №14', avt: '32A', engine: '' },
		{ gate: 10, rp: 'РП №10', avt: '10A', engine: '' },
		{ gate: 11, rp: 'РП №4', avt: '16A', engine: '' },
		{ gate: 12, rp: 'РП №3', avt: '16A', engine: '' },
		{ gate: 14, rp: 'РП №5', avt: '63A', engine: 7 },
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
