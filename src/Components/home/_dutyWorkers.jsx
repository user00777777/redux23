import { useEffect, useState } from 'react'
import GasDuty from './gasDuty/GasDuty'

const getDuty = (electr, plumb, gas) => {
	const currentDate = new Date() 
	const dayOfMonth = currentDate.getDate()
	const hour = currentDate.getHours()
	const month = currentDate.getMonth() + 1

	let dayOfYear =
		Math.floor(
			(currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
		) + 2

// console.log(dayOfYear+=2);

	const duty = shiftNames => {
		const oneShift = shiftNames.map(changeDuty)

		const twoShift = [...oneShift.slice(3), ...oneShift.slice(0, 3)]

		if (hour >= 7 && hour < 19) {
			return { shift: oneShift, isDay: true }
		} else if (hour >= 19 && hour <= 23) {
			return { shift: twoShift, isDay: true }
		} else {
			const nightShift = [...oneShift.slice(2), ...oneShift.slice(0, 2)]
			return { shift: nightShift, isDay: false }
		}
	}

	const dutyGas = duty(['Полищук', 'Стасюк', 'Чеча', 'Выходец'])
	const dutyPlumb = duty(plumb.plumb)
	const dutyEl = duty(electr.el)
	

	const handleDuty = (shift, isDay) => shift[dayOfYear % shift.length]

	const manGas = handleDuty(dutyGas.shift, dutyGas.isDay)
	const manPlumb = handleDuty(dutyPlumb.shift, dutyPlumb.isDay)
	const manEl = handleDuty(dutyEl.shift, dutyEl.isDay)

	return (
		<ul>
			<li>
				Дежурный електрик <span>{manEl}</span>
			</li>
			<li>
				Дежурный сантехник <span>{manPlumb}</span>
			</li>
			<li>
				Дежурный газовщик <span>{manGas}</span>
			</li>
		</ul>
	)
}

const changeDuty = el => {
	const currentDate = new Date()
	const dayOfMonth = currentDate.getDate()
	const month = currentDate.getMonth() + 1

	const specialCases = {
		// лысенко: () =>
		// 	dayOfMonth >= 2 && dayOfMonth <= 8 && month === 10 ? 'Гекало' : el,
		// малько: () =>
		// 	dayOfMonth >= 9 && dayOfMonth <= 31 && month === 10 ? 'Гекало' : el,
		// немченко: () =>
		// 	dayOfMonth >= 1 && dayOfMonth <= 17 && month === 9 ? 'Павлюченко' : el,
		// выходец: () => (dayOfMonth >= 29 && dayOfMonth <= 31 ? 'Колабин' : el),
		// головченко: () => (dayOfMonth >= 7 && dayOfMonth <= 31 ? 'Дубовик' : el),
	}

	return specialCases[el.toLowerCase()] ? specialCases[el.toLowerCase()]() : el
}

export default getDuty
