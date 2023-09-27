import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
	allRp: [
		{
			rp: '1',
			ar: [
				{ name: 'Вводной', nom: '400A', I: '10I', kvt: '' },
				{ name: 'ЩО-7 пр-та', nom: '63A', I: '12A', kvt: 18 },
				{
					name: 'Фрез.ст-к СБ832',
					inv: '№52051',
					nom: '63',
					I: '12',
					kvt: '28,5',
				},
				{
					name: 'Рад.св-"2Н55',
					inv: '№2653',
					nom: '40',
					I: '10',
					kvt: '14,5',
				},
				{
					name: 'Руб тел.',
					inv: '51797',
					nom: '25',
					I: '10',
					kvt: '1,7',
				},
				{
					name: 'Аппарат газ воды',
					inv: '',
					nom: '25',
					I: '10',
					kvt: '1',
				},
				{
					name: 'Инстр-я Маст-я 7-Пр',
					inv: '',
					nom: '25',
					I: '10',
					kvt: '',
				},
				{
					name: 'См 2414',
					inv: '№52800',
					nom: '160',
					I: '10',
					kvt: '52',
				},
				{
					name: 'ВДМ -1001',
					inv: '№51285',
					nom: '100',
					I: '',
					kvt: '50',
				},
				{
					name: 'ШУ 4 Газ.Изл-ей ',
					inv: '',
					nom: '16',
					I: '10',
					kvt: '1',
				},
			],
		},
		{
			rp: '14',

			name: 'одной',
			nom: '4',
			i: '1',
			kvt: '',
		},
	],
}

const rpSlice = createSlice({
	name: 'rp',
	initialState,
	reducers: {
		getRp(state, action) {
			console.log(action.payload)

			state.allRp.forEach(el => {
				if (el.rp == action.payload) {
					return (state.res = el.ar)
				} else {
					console.log('no')
				}
			})
		},
	},
})
export const { getRp } = rpSlice.actions
export default rpSlice.reducer
