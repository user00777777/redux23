import React, { useEffect } from 'react'
import { useState } from 'react'
import s from './Plumbercss/plumber.module.css'
function plumb(pis, babec, golovch, nemch, hours, day) {
	// console.log((day -= 1))
	// hours = 19
	let oneShift = [pis, babec, golovch, nemch]
	let twoShift = [nemch, pis, babec, golovch]
	
	// console.log(hours=22)
	console.log(day)
	day 
	if (hours >= 7 && hours < 19) {
		// console.log(1)

		let plumber = oneShift[day % oneShift.length]
		// console.log(plumber)

		return plumber
	}

	if (hours >= 19 && hours <= 23) {
		console.log('oo')

		let plumber2 = twoShift[day % twoShift.length]
		console.log(day)

		return plumber2
	} else {
		let plumber2 = twoShift[--day % twoShift.length]
		console.log(plumber2)

		// console.log(day)
		// day += 1
		return plumber2
	}
}
//

export default function PlumbersDuty() {
	let date = new Date(),
		day = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes()
	const [newDay, setDay] = useState()
	let [new_Day, set_Day] = useState(day)
	console.log(day)

	let arrDay = [1, 2, 3, 4]

	const ChangeDay = () => {
		let x = arrDay[new_Day % arrDay.length]

		localStorage.setItem('plumber', x)

		let strNum = Number(localStorage.getItem('plumber'))
		setDay(strNum)
		console.log('s', strNum)
	}

	console.log(newDay)

	const oneShift = plumb(
		'Писаренко',
		'Бабец',
		'Головченко',

		'Немченко',
		hours,
		day
	)
	console.log(oneShift)

	return (
		<div className={s.container}>
			<div className={s.plumbers} onClick={ChangeDay}>
				Дежурный сантехник: <h2>{oneShift}</h2>
			</div>
		</div>
	)
}
