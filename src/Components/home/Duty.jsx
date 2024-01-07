import React, { useEffect, useState } from 'react'
import s from './duty.module.css'

export default function Duty() {
	const currentDate = new Date()
	let dayOfMonth = currentDate.getDate()
	const dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()
	const minutes = currentDate.getMinutes()
	//     let nowDate=new Date();
	//     let date=nowDate.getDate();
	//     let oldDate=nowDate.getDate()
	//     let hour=nowDate.getHours();
	//     let minutes=nowDate.getMinutes();
	// console.log((dayOfMonth ))

	let d = 1
	let [newDate, setDate] = useState()
	let [ddate, setDdate] = useState(0)
	let arr = [1, 2, 3, 4]
	function changeDuty() {
		setDdate(() => (ddate += 1))
		setDate(() => arr[ddate % arr.length])
		localStorage.setItem('duty', ddate)
	}

	let change_Day = Number(localStorage.getItem('duty'))

	// console.log((hour ))

	class Shift {
		constructor(duty1, duty2) {
			this.duty1 = duty1
			this.duty2 = duty2
		}
	}
	// console.log(dayOfMonth)

	let vasj = new Shift('Малько','Гекало' )
	let stas = new Shift('Круглый', 'Мисюра')
	let sinkevich = new Shift('Самбур', 'Бондаренко')
	let paha = new Shift('Лысенко', 'Мисюра')

	const workers1 = [vasj, stas, sinkevich, paha]
	const workers2 = [paha, vasj, stas, sinkevich]

	// const currentShift = shifts[(day ) % shifts.length];
	console.log(change_Day)
	let changeDayOfMonth = dayOfMonth
	changeDayOfMonth = changeDayOfMonth += change_Day
	hour = 8

	const currentWorker2 = workers2[changeDayOfMonth % workers2.length]
	// console.log(currentWorker2.duty1)

	if (hour >= 7 && hour < 19) {
		// console.log(1)

		const currentWorker = workers1[changeDayOfMonth % workers1.length]
		// console.log(currentWorker)

		return (
			<div className={s.container}>
				<div className={s.twoShift} onClick={changeDuty}>
					{' '}
					<h2>Дежурные електрики</h2>{' '}
					<h2 className={s.d12}>
						{currentWorker.duty1}
						{/* || {currentWorker.duty2} */}
					</h2>
				</div>
			</div>
		)
	}
	if (hour >= 19 && hour <= 23 && minutes <= 59) {
		// dayOfMonth-=1
		console.log(1)

		return (
			<div className={s.container}>
				<div onClick={changeDuty} className={s.twoShift}>
					<h2>Дежурные Електрики:</h2>
					<h2 className={s.d12}>
						{' '}
						{currentWorker2.duty1}
						{/* и {currentWorker2.duty2} */}
					</h2>
				</div>
			</div>
		)
	}
	if (hour >= 0 && hour < 7) {
		changeDayOfMonth -= 1

		const currentWorker2 = workers2[changeDayOfMonth % workers2.length]

		// console.log([(dayOfMonth ) % workers2.length]);

		return (
			<div className={s.container}>
				<div onClick={changeDuty} className={s.twoShift}>
					<h2>Дежурные Електрики:</h2>
					<h2 className={s.d12}>
						{' '}
						{currentWorker2.duty1}
						{/* и {currentWorker2.duty2} */}
					</h2>
				</div>
			</div>
		)
	}


}
