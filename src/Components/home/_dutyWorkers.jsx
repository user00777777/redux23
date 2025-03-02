import { useEffect, useState } from 'react'
import GasDuty from './gasDuty/GasDuty'
import s from './duty.module.css'

const getDuty = (electr, plumb) => {
	console.log(plumb);
	
	const currentDate = new Date() 
	const hour = currentDate.getHours()

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
	

	const handleDuty = (shift) => shift[dayOfYear % shift.length]

	const manGas = handleDuty(dutyGas.shift, dutyGas.isDay)
	const manPlumb = handleDuty(dutyPlumb.shift, dutyPlumb.isDay)
	const manEl = handleDuty(dutyEl.shift, dutyEl.isDay)

	return (
		<ul>
			<li>
				Деж-й електрик <span>{manEl}<code className={s.telDuty}>6-22</code></span>
			</li>
			<li>
				Деж-й сантехник <span>{manPlumb}<code className={s.telDuty}>8-53</code></span>
			</li>
			<li>
				Деж-й газовщик <span>{manGas}<code className={s.telDuty}>4-20</code></span>
			</li>
		</ul>
	)}
const changeDuty = el => {
	const currentDate = new Date()
	const dayOfMonth = currentDate.getDate()

	const specialCases = {
		// лысенко: () =>
		// 	dayOfMonth >= 2 && dayOfMonth <= 8 && month === 10 ? 'Гекало' : el,
		// Гекало: () =>
		// 	dayOfMonth >= 1 && dayOfMonth <= 31  ? 'Синькевич' : el,
		// Гекало: () =>
		// 	dayOfMonth >= 19 && dayOfMonth <= 31&&month==2  ? 'Синькевич' : el, 
		// немченко: () =>
		// 	dayOfMonth >= 1 && dayOfMonth <= 17 && month === 9 ? 'Павлюченко' : el,
		стасюк: () => (dayOfMonth >= 1 && dayOfMonth <= 31 ? 'Выходец' : el),
	// полищук: () => (dayOfMonth >= 7 && dayOfMonth <= 31 ? 'Дубовик' : el),
	}

	return specialCases[el.toLowerCase()] ? specialCases[el.toLowerCase()]() : el
}

export default getDuty
