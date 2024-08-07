import { createSlice } from '@reduxjs/toolkit'
function Mashin(machine, idMachine, id) {
	return {
		machine,
		idMachine,
		id,
	}
}
const initialState = {
	data: [
		{
			machine: 'Клепка',
			idMachine: '№52131',

			id: '052116',
		},
		{
			machine: 'Клепка',
			idMachine: '№52155',

			id: '052115',
		},
		{
			machine: 'Клепка',
			idMachine: '№51791',

			id: '051723',
		},
		{
			machine: 'Клепка',
			idMachine: '№51814',

			id: '051651',
		},
		{
			machine: 'Клепка',
			idMachine: '№51910',

			id: '051847',
		},
		{
			machine: 'Клепка',
			idMachine: '№51110',

			id: '051812',
		},
		{
			machine: 'Клепка',
			idMachine: '№51109',

			id: '051650',
		},
		{
			machine: '2А554',
			idMachine: '№52035',

			id: 2,
		},
		{
			machine: '2А554',
			idMachine: '№5268',

			id: 3,
		},
		{
			machine: '2А554',
			idMachine: '№51773',

			id: 3,
		},
		{
			machine: '2Н55',
			idMachine: '№1705',

			id: 3,
		},
		{
			machine: '2А554',
			idMachine: '№51824',

			id: 3,
		},
		{
			machine: '2А554',
			idMachine: '№51819',

			id: 3,
		},
		{
			machine: '2Н55',
			idMachine: '№11917',

			id: 3,
		},
		{
			machine: '2Н55',
			idMachine: '№2653',

			id: 3,
		},
		{
			machine: 'СМ2126',
			idMachine: '№52050',

			id: 3,
		},
		{
			machine: 'СМ2126',
			idMachine: '52049',

			id: 3,
		},
		{
			machine: 'СБ833',
			idMachine: '№52056',

			id: 3,
		},
		{
			machine: 'СБ833',
			idMachine: '№52055',

			id: 3,
		},
		{
			machine: 'СБ972',
			idMachine: '№52911',

			id: 3,
		},
		{
			machine: 'СБ972',
			idMachine: '№52910',

			id: 3,
		},
		{
			machine: 'СБ898',
			idMachine: '№052331',

			id: 3,
		},
		{
			machine: 'Am19176',
			idMachine: '№52333',

			id: 3,
		},
		{
			machine: 'СБ890',
			idMachine: '№52944',

			id: 3,
		},
		{
			machine: 'СБ832',
			idMachine: '№052051',

			id: 3,
		},
		{
			machine: 'СБ832',
			idMachine: '№52052',

			id: 3,
		},
		{
			machine: 'ВС-300',
			idMachine: '№51631',

			id: 3,
		},
		{
			machine: 'ВДМ',
			idMachine: '№51667',

			id: 3,
		},
		{
			machine: 'ФП27П',
			idMachine: '№52232',

			id: 3,
		},
		{
			machine: 'М3048',
			idMachine: '№51748',

			id: 3,
		},
		{
			machine: '6Р82',
			idMachine: '№1419',

			id: 3,
		},
		// {
		//   machine: "",
		//   idMachine: "",

		//   id: 3,
		// },
		new Mashin('СМ2414', '№52800', 3),
		new Mashin('СБ890', '№52944', 3),
		new Mashin('телега', '№051973---', 3),
		new Mashin('клепка', '051807', '051651'),
	],
	result: [],
}

const machine = createSlice({
	name: 'machine',
	initialState,
	reducers: {
		mashineGet(state, action) {
			let s = JSON.stringify(state)
			let ss = JSON.parse(s)

			// console.log(ss.data);

			state.data.find(el => {
				let regexp = new RegExp(`${el.idMachine}$`, 'i')

				if (regexp.test(action.payload.trim())) {
					console.log('yes')
					state.result.length = 0
					//   let s= JSON.stringify(el)
					// let ss=JSON.parse( s)
					// console.log(el.idMachine);
					// let lentH = state.result.length;
					// console.log(lentH);

					if (state.result.length == 0) {
						state.result.length = 0
						console.log('00')

						state.result.push(el)
					}
				}
			})
			let s1 = JSON.stringify(state)
			let ss2 = JSON.parse(s1)
		},
		inpGet(state, action) {
			console.log(action.payload)

			let s = JSON.stringify(state)
			let ss = JSON.parse(s)
			ss.data.find(el => {
				// console.log(el.idMachine);

				let regexp = new RegExp(`${action.payload}$`, 'i')

				if (regexp.test(el.idMachine)) {
					state.result = []
					console.log(el.idMachine)

					state.result.push(el.idMachine)
				} else {
					// console.log('no');
				}
			})
		},
	},
})
export const { mashineGet } = machine.actions
export const { inpGet } = machine.actions
export default machine.reducer
