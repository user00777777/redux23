import { create } from 'zustand'


const useStore = create(set => ({
	hoists: [],
	hoistForDays: [],

	addHoist: newHoist =>
		set(state => ({
			hoists: Array.isArray(newHoist)
				? [...state.hoists, ...newHoist]
				: [...state.hoists, newHoist],
		})),

	addHoistForDays: newHoist =>
		set(state => ({
			hoistForDays: Array.isArray(newHoist)
				? [...state.hoistForDays, ...newHoist]
				: [...state.hoistForDays, newHoist],
		})),

	removeHoist: index =>
		set(state => ({
			hoists: state.hoists.filter((_, i) => i !== index),
		})),

	getHoists: () => {
		const state = useStore.getState()
		return state.hoists
	},

	getHoistsForDays: () => {
		const state = useStore.getState()
		return state.hoistForDays
	},

	forEachHoist: callback =>
		set(state => {
			state.hoists.forEach(callback)
			return state
		}),
}))

export default useStore
