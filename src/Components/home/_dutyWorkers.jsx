import { useEffect, useState } from 'react'
import GasDuty from './gasDuty/GasDuty'

export default function getDuty(electr, plumb, gas) {
	// console.log(gas.gas)
	// const [el, gas] = props
	// console.log(el)

	const currentDate = new Date()
	let dayOfMonth = currentDate.getDate()
	console.log(dayOfMonth);

	// const dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()
	const minutes = currentDate.getMinutes()
	const month = currentDate.getMonth()+1

	let dayOfYear = Math.floor(
		(currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000
	)
  // console.log(month);
  
	// console.log((dayOfYear ))
  // console.log(dayOfMonth=31);
  // console.log(hour=24);
  
  

	// hour = 1

	let duty = (one, two, three, four) => {




		let firstOneShift = [one, two, three, four]


let oneShift = firstOneShift.map(el => {

  

	if (el.toLowerCase() == 'круглый' && dayOfMonth >= 9 && dayOfMonth <= 31&&month==4) {
		console.log('ok')

		return (el = 'Гекало')
	} else {
    console.log('no');
    
		return el
	}
})



		const twoShift = [...oneShift.slice(3), ...oneShift.slice(0, 3)]
		// console.log('two', twoShift)
		// console.log(dayOfMonth)

		if (hour >= 7 && hour < 19) {
			console.log('day')

			return { shift: oneShift, bool: true }
		}
		if (hour >= 19 && hour <= 23) {
			console.log('evening')

			return { shift: twoShift, bool: true }
		} else {
			console.log('night')
      let twoChangeShift = [...oneShift.slice(2), ...oneShift.slice(0, 2)]
      // console.log(twoChangeShift);
      

			return { shift: twoChangeShift, bool: false }
		}
	}

	let dutyGas = duty(...gas.gas)
	let dutyPlumb = duty(...plumb.plumb)
	let dutyEl = duty(...electr.el)
	const handleDuty = (el, elBool = true) => {
    // console.log(el);
    
		// console.log(elBool)
// dayOfYear=dayOfYear-1


		let duty = el[dayOfYear % el.length]

		// console.log(duty)

		return duty
	}

	const manGas = handleDuty(dutyGas.shift, dutyGas.bool)
	const manPlumb = handleDuty(dutyPlumb.shift, dutyPlumb.bool)
	const manEl = handleDuty(dutyEl.shift, dutyEl.bool)
	console.log(manEl, manGas, manPlumb)

	return (
		<ul>
			<li>
				Дежурный електрик <span> {manEl}</span>
			</li>
			<li>
				Дежурный сантехник<span>{manPlumb}</span>
			</li>
			<li>
				Дежурный газовщик<span>{manGas}</span>
			</li>
		</ul>
	)
}
// one, two, three, four
