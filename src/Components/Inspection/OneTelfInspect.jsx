// import React from 'react'
// import s from './inspection.module.css'
// import { useSelector } from 'react-redux'

// export default function OneTelfInspect() {
// 	const state = useSelector(state => state.ispectHoist)
// 	let newState = [...state]
// 	console.log()

// 	let x = newState.sort((a, b) => a.daysDifference - b.daysDifference)

// 	console.log(x)

// 	return (
// 		<>
// 			{x.map((el, i) => {
// 				if (el.daysDifference > 30) {
// 					return (
// 						<>
// 							<li key={i} className={`${s.telf} `}>
// 								тельфер
// 								{el.telf}
// 							</li>
// 							<li key={i} className={`${s.telf} `}>
// 								{el.end}
// 							</li>
// 						</>
// 					)
// 				}
// 			})}
// 		</>
// 	)
// }

import React from 'react'
import s from './inspection.module.css'
import { useSelector } from 'react-redux'

export default function OneTelfInspect() {
	const state = useSelector(state => state.ispectHoist)
	let newState = [...state]

	// Сортировка по разнице в днях
	let sortedState = newState.sort((a, b) => a.daysDifference - b.daysDifference)

	sortedState
		.filter(el => Number(el.daysDifference) < 1000 && el.daysDifference >= 0)
		.map((el, i) => console.log(Number(el.daysDifference)))

	return (
		<>
			{sortedState
				.filter(el => Number(el.daysDifference) < 300 && el.daysDifference >= 0)
				.map((el, i) => (
					<React.Fragment key={i}>
						<li className={`${s.telf} `}>
							тельфер
							{el.telf}
						</li>
						<li className={`${s.telf} `}>{el.end}</li>
					</React.Fragment>
				))}
		</>
	)
}
