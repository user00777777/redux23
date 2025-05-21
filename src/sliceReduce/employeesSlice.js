import { createSlice } from '@reduxjs/toolkit'
import newEmployee from './ObjCranes/newEmployee'

const El = 'группа допуска'
const Pog = 'пожарка'
const Vus = 'высота'
const GpmCranes = 'ГПМ Краны Обслуживание'
const Shlif = 'шлифовальные'

const initialState = {
	list: [
		newEmployee(
			'Дидусь.A',
			[
				{ date: '2025-03-08', name: El },
				{ date: '2025-03-13', name: Vus },
				{ date: '2025-03-14', name: Pog },
				{ date: '2025-03-18', name: GpmCranes },
				{ date: '2025-03-13', name: Shlif },
			],
			1
		),
		newEmployee(
			'',
			[
				{ date: '', name: El },
				{ date: '2025-05-13', name: Vus },
				{ date: '2025-01-15', name: Pog },
				{ date: '2025-05-01', name: GpmCranes },
				{ date: '2025-09-04', name: Shlif },
			],
			2
		),
		newEmployee(
			'',
			[
				{ date: '', name: El },
				{ date: '2025-05-03', name: Vus },
				{ date: '2025-09-04', name: Pog },
				{ date: '2025-01-02', name: GpmCranes },
				{ date: '2025-09-04', name: Shlif },
			],
			3
		),
		newEmployee(
			'Андриенко К.',
			[
				{ date: '2025-02-16', name: El },
				{ date: '2025-05-01', name: Vus },
				{ date: '2025-05-02', name: Pog },
				{ date: '2025-05-01', name: GpmCranes },
				{ date: '2025-05-03', name: Shlif },
			],
			4
		),
	].filter(el => el !== undefined && el !== null), // Фильтрация undefined элементов
	result: [],
	resNum: [],
}

const calculateDaysDifference = (date, currentDate) => {
	const licenceDate = new Date(date)
	return (licenceDate - currentDate) / (1000 * 60 * 60 * 24)
}

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		employees(state, action) {
			const currentDate = new Date(action.payload)

			const updatedEmployees = state.list.filter(employee => {
				return employee.licences.some(licence => {
					const daysDifference = calculateDaysDifference(
						licence.date,
						currentDate
					)

					if (daysDifference <= 10) {
						state.resNum.length = 0
						state.resNum.push(10)
						return true
					} else if (daysDifference <= 30) {
						state.resNum.length = 0
						state.resNum.push(30)
						return true
					} else if (daysDifference < 60) {
						state.resNum.length = 0
						state.resNum.push(60)
						return true
					}
					return false
				})
			})

			state.result = updatedEmployees // Обновляем state.result с отфильтрованными сотрудниками
		},
	},
})

export const { employees } = employeesSlice.actions
export default employeesSlice.reducer
