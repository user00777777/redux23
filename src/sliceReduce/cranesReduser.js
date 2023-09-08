function f(n, path) {
	return {
		n,
		path,
	}
}
const mal1 = f('mal1', 'рп14')
const mal2 = f('mal2', 'рп14')
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = { mal1, mal2 }

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
			let v = Object.values(state.mal1)
			console.log(v)

			let actIon = action.payload
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
