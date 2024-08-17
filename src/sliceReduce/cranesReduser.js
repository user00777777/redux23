import { createSlice } from '@reduxjs/toolkit'
import crane7 from '../Components/Cranes/FotoCrane/Crane1_D7.jpgNew.jpg'

import React from 'react'
import crane1_6 from './fotoCranes/foto1_6'
// import foto2_6 from './fotoCranes/foto2_6'
import foto3_6 from './fotoCranes/foto3_6'
import foto2_6 from './fotoCranes/foto2_6'
import craneRepair from './ObjCranes/objCranes'
import newCrane from './ObjCranes/newCrane'

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
				craneRepair('Замена пускателей', '..-04-24', 'Хода моста'),
				craneRepair('Замена тормоза ', '..-04-24', 'Тележка'),
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
			inv: '11850',
			Q: '20/5T',
			cranName: '1/7',
			craneId: '2349',
			rp: 'Шинный мост',
			id: 'Кран 10T',
			f: [crane7],
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
		newCrane('2/7', '5', '52828', '7343'),
		newCrane('1/1', '5', '5283', '7336'),
		newCrane('2/1', '5', '52818', '7329'),
		newCrane('3/1', '5', '3433', '456'),
		newCrane('mal2', '10', '52154', '5054'),
		newCrane('1/2', '5', '11076', '1471'),
		newCrane('2/2', '5', '52390', '7194'),
		newCrane('3/2', '5', '50677', '4062'),
		newCrane('1/3', '5', '52421', '7213'),
		newCrane('2/3', '5', '52809', '7326'),
		newCrane('3/3', '5', '50003', '2231'),
		newCrane('1/4', '5', '1861', '377'),
		newCrane('2/4', '5', '52267', '8205'),
		newCrane('3/4', '5', '52303', '8244'),
		newCrane('1/5', '5', '52316', '4061'),
		newCrane('2/5', '5', '52273', '8210'),
		newCrane('3/5', '5', '52382', '7166'),
		newCrane('4/5', '5', '52803', '7317'),
		newCrane('estOld1', '10', '52316', '8249'),
		newCrane('estOld2', '10', '52327', '8251'),
		// newCrane()
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

			// console.log(JSON.stringify(crane))
			// console.log(crane);

			state.craneObj = crane
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
