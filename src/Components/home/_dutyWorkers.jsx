import { useEffect, useState } from 'react'
import GasDuty from './gasDuty/GasDuty'

export default function getDuty(electr, plumb, gas) {
	// console.log(gas.gas)
	// const [el, gas] = props
	// console.log(el)

	const currentDate = new Date()
	let dayOfMonth = currentDate.getDate()
	// console.log(dayOfMonth=22);

	// const dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()
	const minutes = currentDate.getMinutes()

	let dayOfYear = Math.floor(
		(currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
	)

	// hour = 2

	let duty = (one, two, three, four) => {
		console.log(one)

		let oneShift = [one, two, three, four]
		const twoShift = [...oneShift.slice(3), ...oneShift.slice(0, 3)]
		// console.log('two', twoShift)
		// console.log(dayOfMonth)

		if (hour >= 7 && hour < 19) {
			console.log('day')

			return { shift: oneShift, bool: true }
		}
		if (hour > 19 && hour <= 23) {
			console.log('evening')

			return { shift: twoShift, bool: true }
		} else {
			console.log('night')

			return { shift: twoShift, bool: false }
		}
	}

	let dutyGas = duty(...gas.gas)
	let dutyPlumb = duty(...plumb.plumb)
	let dutyEl = duty(...electr.el)
	const handleDuty = el => {
		let duty = el[dayOfYear % el.length]
		// console.log(duty);

		return duty
	}

	const manGas = handleDuty(dutyGas.shift)
	const manPlumb = handleDuty(dutyPlumb.shift)
	const manEl = handleDuty(dutyEl.shift)
	console.log(manEl, manGas, manPlumb)

	return (
		<ul>
			<li>
				Дежурный електрик <span> {manEl} 
     </span>
			</li>
			<li>Дежурный сантехник<span>{manPlumb}</span></li>
			<li>Дежурный газовщик<span>{manGas}</span></li>
		</ul>
	)
}
// one, two, three, four
