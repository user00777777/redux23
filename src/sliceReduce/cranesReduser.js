import { createSlice } from '@reduxjs/toolkit'
import crane7 from '../Components/Cranes/FotoCrane/Crane1_D7.jpgNew.jpg'
import crane_Mal5 from '../Components/Cranes/FotoCrane/3cD6__.jpg'
import crane_Mal5_1 from '../Components/Cranes/FotoCrane/3c6di.jpg'
import crane_Mal5_2 from '../Components/Cranes/FotoCrane/3Cr6d.jpg'
import crane_Mal5_3 from '../Components/Cranes/FotoCrane/3CraneD6.jpg'
// import crane_Mal5_4 from '../Components/Cranes/FotoCrane/3CraneD6___'
import crane_Mal5_5 from '../Components/Cranes/FotoCrane/3CraneD6___.jpg'
import React from 'react'
const initialState = {
	list: [
		{
			cranName: 'mal1',
			rp: 14,
			id: 'Кран 5T',
			f: [crane_Mal5, crane_Mal5_1, crane_Mal5_2, crane_Mal5_3, crane_Mal5_5],
		},

		{ cranName: '6_1', rp: 14, id: 'Кран 5T', f: '' },
		{ name: '1_7', rp: 14, id: 'Кран 10T', f: crane7 },
	],
	craneObj: {},
}

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
			// console.log(action.payload);
			console.log(JSON.stringify(state))
			const crane = state.list.find(el => {
				if (el.cranName == action.payload) return el
			})

			console.log(JSON.stringify(crane))

			state.craneObj = crane
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
