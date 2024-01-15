
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
	list: [
		{ name: 'mal1', rp: 14, id: 'Кран 5T' },
		{ name: 'mal2', rp: 14, id: 'Кран 10T' },
	],
	craneObj:{},
}

const cranes = createSlice({
	name: 'cranes',
	initialState,
	reducers: {
		craneS(state, action) {
	// console.log(action.payload);
  console.log(JSON.stringify(state))
const crane=state.list.find((el)=>{
if (el.name==action.payload)return el;  


}  )  

  console.log(JSON.stringify(crane))

  state.craneObj=crane






  
		},
	},
})
export const { craneS } = cranes.actions
export default cranes.reducer
