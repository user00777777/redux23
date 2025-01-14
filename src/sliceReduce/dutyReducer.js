import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	duty: [
		{ el: ['Круглый', 'Синькевичь', 'Лысенко', 'Малько'] },
		{ plumb: ['Бабец', 'Головченко', 'Немченко', 'Дубовик'] },
		{ gas: ['Полищук', 'Стасюк', 'Чеча', 'Колабин'] },
	],
}
const duty = createSlice({
	name: 'duty',
	initialState,
	reducers: {
		dutyToday(state, action) {
			console.log(state.duty)
		},
	},
})
export const { dutyToday } = duty.actions
export default duty.reducer
