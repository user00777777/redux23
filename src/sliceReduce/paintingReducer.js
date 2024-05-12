import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	crons: [
		{
			describe: 'Крон 15 КВТ',
			name: '5A16094Y3  Крон',
			p: '15 Kvt',
			rpm: '1480 Об',
			a: '29,6 А',
			weight: '127 Кг',
		},
	],
}
const painting = createSlice({
	name: 'paint',
	initialState,
	reducers: {
		crons(state, action) {},
	},
})
export const { paint } = painting.actions
export default painting.reducer
