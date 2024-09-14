import { create } from 'zustand'

const useStore = create(set => ({
	count: 0,
	increment: () => set(state => ({ count: state.count + 1 })),
	decrement: () => set(state => ({ count: state.count - 1 })),
	removeAllCounts: () => set({ count: 0 }),
	updateCounts: newCount => set({ count: newCount }), // исправлено
}))



export default useStore
