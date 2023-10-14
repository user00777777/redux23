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
			ar: [
				{
					name: 'Нагревалка №52131',
					nom: '100A',
					I: '12',
					kvt: '56',
				},
				{
					name: 'Гидроскоба №52801',
					nom: '63А',
					I: '12',
					kvt: '11,5',
				},
				{
					name: 'Нагревалка №51791',
					nom: '12',
					I: '100А',
					kvt: '56',
				},
				{
					name: 'Гидроскоба №52116',
					nom: '63А',
					I: '12',
					kvt: '14,5',
				},
				{
					name: 'ШР Тельферов',
					nom: '80А',
					I: '10',
					kvt: '12',
				},
				{
					name: 'Св-й Станок СМ2126 №52050',
					nom: '63А',
					I: '12',
					kvt: '15,5',
				},
				{
					name: 'Рад-Сверл.2А554 №51773',
					nom: '4А',
					I: '12',
					kvt: '11,5',
				},
				{
					name: 'Гидроскоба №51723',
					nom: '80',
					I: '12',
					kvt: '11,5',
				},
				{
					name: 'Рад-Сверл.2А554 №52035',
					nom: '40',
					I: '12',
					kvt: '11,5',
				},
				{
					name: 'Руб.Тельф',
					nom: '12,5',
					I: '12',
					kvt: '1,7',
				},
				{
					name: 'Шу ворот№9',
					nom: '32',
					I: '10',
					kvt: '3',
				},
				{
					name: 'Фрез.Станок СБ833 №52056',
					nom: '100',
					I: '10',
					kvt: '63',
				},
				{
					name: 'Главный руб.Троллеи нов  Эстакады',
					nom: '160',
					I: '10',
					kvt: '62',
				},
				{
					name: 'Руб тел.',
					nom: '16',
					I: '10',
					kvt: '1.7',
				},
			],
		},
		{
			rp: '11',
			ar: [
				{
					name: 'Нагревалка №52814 ',
					nom: '100А ',
					I: ' 10',
					kvt: '56 ',
				},
				{
					name: ' Гидроскоба инв№51651',
					nom: '40А ',
					I: ' 11',
					kvt: ' 11',
				},
				{
					name: 'Фрез Ст-к Сб 972 №52911 ',
					nom: '80 ',
					I: '10 ',
					kvt: ' 40',
				},
				{
					name: 'Шу телю Самопр. №51973 ',
					nom: '63 ',
					I: ' 12',
					kvt: '15 ',
				},

				// {
				// 	name: ' ',
				// 	nom: ' ',
				// 	I: ' ',
				// 	kvt: ' ',
				// },
			],
		},
		{
			rp: '12',
			ar: [
				{
					name: ' Фрез.Ст-к СБ833 352055',
					nom: ' 100а',
					I: ' 12',
					kvt: '63 ',
					ii: 1,
				},
				{
					name: 'Нагревалка №52155 ',
					nom: '100А ',
					I: '12 ',
					kvt: '56 ',
					ii: 2,
				},
				{
					name: ' Рад.Свер 2Н55 №1705',
					nom: ' 25А',
					I: ' 10',
					kvt: ' 11,5',
					ii: 3,
				},
				{
					name: ' Свер.Ст. СМ2126 №52049',
					nom: ' 80А',
					I: ' 10',
					kvt: '15.5 ',
					ii: 4,
				},
				{
					name: ' Гидроскоба №52115',
					nom: '60А ',
					I: '10 ',
					kvt: '11 ',
					ii: 5,
				},
				{
					name: ' Нагревалка №52629',
					nom: '100 ',
					I: ' 10',
					kvt: ' 56',
					ii: 6,
				},
				{
					name: ' Рад Свер 2А554 №52068',
					nom: ' 16',
					I: ' 10',
					kvt: '11,5 ',
					ii: 7,
				},
				{
					name: ' ШР телферов',
					nom: '25А ',
					I: '11 ',
					kvt: '6.8 ',
					ii: 9,
				},
				{
					name: 'Нагревалка №52801 ',
					nom: ' 125А',
					I: ' 10',
					kvt: '56 ',
					ii: 10,
				},
				{
					name: ' Гидроскоба №52386',
					nom: ' 40А',
					I: ' 10',
					kvt: ' 11',
					ii: 11,
				},
			],
		},
		{
			rp: 3,
			ar: [
				{
					name: ' Вводной',
					nom: '400 ',
					I: ' 4000',
					kvt: ' ',
					ii: 1,
				},
				{
					name: ' Шу№1  Газ-Излучатели',
					nom: '16 ',
					I: ' 10',
					kvt: ' 0.5',
					ii: 2,
				},
				{
					name: ' Руб.телф№2(малярка)',
					nom: ' 32',
					I: '12 ',
					kvt: '3.5 ',
					ii: 3,
				},
				{
					name: ' Шкаф 36V розетки',
					nom: ' 50',
					I: ' 10',
					kvt: '8 ',
					ii: 4,
				},
				{
					name: 'Телега №52087 ',
					nom: ' 16',
					I: ' 10',
					kvt: '8 ',
					ii: 5,
				},
				{
					name: ' Руб.телф№1(малярка) ',
					nom: ' 25',
					I: '12 ',
					kvt: '3.5 ',
					ii: 6,
				},
				{
					name: 'Руб.телф№3(малярка)  ',
					nom: '16 ',
					I: '10 ',
					kvt: '3.5 ',
					ii: 7,
				},
				{
					name: ' Шу ворот 12',
					nom: ' 16',
					I: ' 10',
					kvt: ' 3',
					ii: 8,
				},
				{
					name: 'Руб.телф№4(малярка) ',
					nom: '40 ',
					I: '10 ',
					kvt: ' 3.5',
					ii: 9,
				},
				{
					name: ' Шр-5 Запитка телф.',
					nom: ' 40',
					I: '10 ',
					kvt: '10 ',
					ii: 10,
				},
				{
					name: 'УВ зап.КГиС(Мал-а) №52015 ',
					nom: '250 ',
					I: ' 10',
					kvt: '28.5 ',
					ii: 11,
				},
				{
					name: 'Фрез. СБ832 №52052',
					nom: '100 ',
					I: '10 ',
					kvt: '28.5 ',
					ii: 12,
				},
				{
					name: 'Телф №52023(стенд) ',
					nom: '16 ',
					I: '10 ',
					kvt: '1.7 ',
					ii: 13,
				},
				{
					name: ' АВР зап.Пульт.печей',
					nom: ' 63',
					I: '12 ',
					kvt: ' ',
					ii: 14,
				},
				// {
				// 	name: ' ',
				// 	nom: ' ',
				// 	I: ' ',
				// 	kvt: ' ',
				// 	ii:
				// },
			],
		},
		{
			rp: 2,
			ar: [
				{
					name: ' Вводной',
					nom: ' 630',
					I: ' 6300',
					kvt: ' ',
					ii: 1,
				},
				{
					name: 'Резерв ',
					nom: '400 ',
					I: ' 8',
					kvt: ' ',
					ii: 2,
				},
				{
					name: ' Сб980 №52944',
					nom: ' 125',
					I: '10 ',
					kvt: ' ',
					ii: 3,
				},
				{
					name: ' Нагревалка №51109',
					nom: ' 125А',
					I: ' 10А',
					kvt: ' 56',
					ii: 4,
				},
				{
					name: 'Гидроскоба №51650 ',
					nom: '40 ',
					I: '10 ',
					kvt: '12 ',
					ii: 5,
				},
				{
					name: 'Руб Тельф ',
					nom: ' 16А',
					I: ' 10А',
					kvt: '1.7 ',
					ii: 6,
				},
				{
					name: 'М 3048 №51748 ',
					nom: ' 16А',
					I: ' 10А',
					kvt: ' 7',
					ii: 7,
				},
				{
					name: ' Руб Телф',
					nom: ' 12.5А',
					I: ' 12А',
					kvt: ' 1.7',
					ii: 8,
				},
				{
					name: 'Руб. п/а ВС300Б ',
					nom: '40А ',
					I: ' 10А',
					kvt: ' 18',
					ii: 9,
				},
				{
					name: ' Що №6 Потолочное Осв.6-пр',
					nom: ' 125А',
					I: '8-12 ',
					kvt: ' 40',
					ii: 10,
				},
			],
		},
	],
}

const rpSlice = createSlice({
	name: 'rp',
	initialState,
	reducers: {
		getRp(state, action) {
			// console.log(action.payload)

			state.allRp.forEach(el => {
				if (el.rp == action.payload) {
					return (state.res = el.ar)
				} else {
					// console.log('no')
				}
			})
		},
	},
})
export const { getRp } = rpSlice.actions
export default rpSlice.reducer
