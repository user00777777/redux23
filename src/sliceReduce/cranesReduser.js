import { createSlice } from '@reduxjs/toolkit'
import crane7 from '../Components/Cranes/FotoCrane/Crane1_D7.jpgNew.jpg'

import React from 'react'
import crane1_6 from './fotoCranes/foto1_6'
// import foto2_6 from './fotoCranes/foto2_6'
import foto3_6 from './fotoCranes/foto3_6'
import foto2_6 from './fotoCranes/foto2_6'
import craneRepair from './ObjCranes/objCranes'

const initialState = {
	list: [
		{
			cranName: 'mal1',
			craneId: '5028',
			rp: 'РП_14',
			id: 'Кран 5T',
			f: foto3_6(),
			repair: [
				craneRepair('Замена счеток', '2-12-23', 'Заменили счетки над кабиной'),
				craneRepair('Замена контроллера', '..-04-24', 'Хода моста'),
			],
		},

		{
			cranName: '1/6',
			craneId: '4613',
			rp: 'Шинный мост',
			id: 'Кран 5T',
			f: crane1_6(),
			repair: [[craneRepair()]],
		},
		{
			cranName: '1/7',
			craneId: '2349',
			rp: 'Шинный мост',
			id: 'Кран 10T',
			f: crane7,
			repair: [
				craneRepair('Пускатели', '1/09/23', 'Замена всех пускателей'),
				craneRepair('Подвеска', '00/12/23', 'Замена кабельной подвески'),
			],
		},
		{
			cranName: '2/6',
			craneId: '4964',
			rp: 'Шинный мост',
			id: 'Кран 10T',
			f: foto2_6(),
			repair: [
				craneRepair('Пускатели', '21/02/23', 'Ход моста 1 штуки'),
				craneRepair(
					'Щетки',
					'12/03/24',
					'Три новых щеткодержателя и щетки ход моста над кабиной '
				),
				craneRepair('Двигатель', '00/лето/23', 'Замена двигателя х-моста'),
				craneRepair(
					'Тормоз тележки',
					'13/03/24',
					'Замена катушки тормоза тележки'
				),
			],
		},
		{
			cranName: '3/6',
			craneId: '8238',
			rp: 'Шинный мост',
			id: 'Кран 10T',
			f: foto3_6(),
			repair: [
				craneRepair('Пускатели', '26/07/23', 'Замена пускателя моста'),
				craneRepair('Пускатели', '10/08/23', 'Замена пускателя моста'),
				craneRepair('Пускатели', '18/10/23', 'Замена пускателя моста 2 Шт'),
				craneRepair(
					'Двигателя',
					'18/10/23',
					'Замена шестерни хода моста над кабиной'
				),
				craneRepair('Щетки', '00/02/24', 'Замена щеток двигателя подьема 2 шт'),
			],
		},
	],
	craneObj: {},
}

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
			// console.log(action.payload)
			// console.log(JSON.stringify(state))
			const crane = state.list.find(el => {
				if (el.cranName == action.payload) return el
			})

			console.log(JSON.stringify(crane))
			// console.log(crane);

			state.craneObj = crane
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
