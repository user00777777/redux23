// function f(crane, path) {
// 	return {
// 		crane,
// 		path,
// 	}
// }
// const mal1 = f('mal1', 'рп14')
// const mal2 = f('mal2', 'рп14')
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
	list: [
		{ name: 'mal1', rp: 14 },
		{ name: 'mal2', rp: 14 },
	],
	list1: [],
}

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
			let x = state.list.find(el => {
				if (el.name == action.payload) {
					return el
				}
			})
			state.answer = x
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
