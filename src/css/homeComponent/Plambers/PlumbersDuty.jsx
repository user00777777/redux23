import React, { useEffect } from 'react'
import { useState } from 'react'
import s from './Plumbercss/plumber.module.css'
function plumb(pis, pawluch, golovch, nemch, hours, day) {
	console.log((day -= 1))
	// hours = 9
	let oneShift = [pis, pawluch, golovch, nemch]
	let twoShift = [nemch, pis, pawluch, golovch]
	console.log(day % oneShift.length)
	console.log(oneShift[day % oneShift.length])
	// console.log(twoShift)
	// console.log(hours >= 7 && hours < 19)
	// console.log((day -= 1))

	if (hours >= 7 && hours < 19) {
		console.log(1)

		let plumber = oneShift[day % oneShift.length]
		console.log(plumber)

		return plumber
	}

	if (hours >= 19 && hours <= 23) {
		console.log('oo')

		let plumber2 = twoShift[day % twoShift.length]
		console.log(plumber2)

		return plumber2
	} else {
		let plumber2 = twoShift[--day % twoShift.length]
		console.log(plumber2)

		console.log(day)

		return plumber2
	}
}
//

export default function PlumbersDuty() {
	const [plumber1, setPlumber] = useState('')
	let date = new Date(),
		day = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		changeDay = day
	const oneShift = plumb(
		'Писареенко',
		'Павлюченко',
		'Головченко',

		'Немченко',
		hours,
		day
	)
	console.log(oneShift)

	return (
		<div className={s.container}>
			<div className={s.plumbers}>
				Дежурный сантехник: <h2>{oneShift}</h2>
			</div>
		</div>
	)
}