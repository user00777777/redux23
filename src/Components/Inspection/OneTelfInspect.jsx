import React, { useState } from 'react'
import s from './inspection.module.css'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export default function OneTelfInspect({ daysDifference }) {
	const state = useSelector(state => state.ispectHoist)
	let newState = [...state]
	const [ind, SetIn] = useState(true)

	// console.log(daysDifference?.strDays)

	let sortedState = newState.sort((a, b) => a.daysDifference - b.daysDifference)

	if (daysDifference?.handleClick) {
		// daysDifference?.handleClick(daysDifference?.strDays, daysDifference?.num)
		newState.filter(el => {
      // console.log(Number(el.daysDifference))
      
			let year =
				Number(el.daysDifference) < daysDifference.num &&
				el.daysDifference >= 0 &&
				daysDifference?.strDays === 'год'
			let month =
				Number(el.daysDifference) < daysDifference.num &&
				el.daysDifference >= 0 &&
				daysDifference?.strDays === 'месяц'
			let  quarter =
				Number(el.daysDifference) < daysDifference.num &&
				el.daysDifference >= 0 &&
				daysDifference?.strDays === 'полгода'
			let ten =
				Number(el.daysDifference) < daysDifference.num &&
				el.daysDifference >= 0 &&
				daysDifference?.strDays === 'десять'
			let twoYears =
				Number(el.daysDifference) < daysDifference.num &&
				el.daysDifference >= 0 &&
				daysDifference?.strDays === 'два года'
      // console.log(r);
      
      if (year) {
				// console.log(daysDifference?.strDays)

				daysDifference?.handleClick(daysDifference?.strDays)
			}
      if (month) {
				// console.log(daysDifference?.strDays)

				daysDifference?.handleClick(daysDifference?.strDays)
			}
      if (quarter) {
				// console.log(daysDifference?.strDays)

				daysDifference?.handleClick(daysDifference?.strDays)
			}
      if (ten) {
				// console.log(daysDifference?.strDays)

				daysDifference?.handleClick(daysDifference?.strDays)
			}
      if (twoYears) {
				// console.log(daysDifference?.strDays)

				daysDifference?.handleClick(daysDifference?.strDays)
			}
		})
	}

	return (
		<Accordion className={s.headAccord}>
			<AccordionItem
				header={`${daysDifference?.strDays} ${
					daysDifference?.num == 10 ? 'дней' : ''
				}`}
				className={s.accordion}
			>
				<div className={s.wrapOneTelf}>
					<ul className={s.headTelf}>
						<li className={`${s.itemTelf} ${s.telferHead}`}>Тельфер</li>
						<li className={`${s.itemTelf} ${s.check}`}>Проверено</li>
						<li className={`${s.itemTelf} ${s.check}`}>Сдача</li>
						<li className={`${s.itemTelf} ${s.q}`}>Q</li>
						<li className={`${s.itemTelf}`}>Пролет</li>
						<li className={`${s.itemTelf} ${s.days}`}>место</li>
					</ul>
					{sortedState
						.filter(
							el =>
								Number(el.daysDifference) < daysDifference.num &&
								el.daysDifference >= 0
						)
						.map((el, id) => {
							return (
								<div key={id}>
									<ul className={s.wrapContent} id={s.wrapTelf}>
										<li className={`${s.telf} ${s.telfer}`}> {el.telf}</li>
										<li className={`${s.telf} ${s.check1}`}>{el.start}</li>
										<li className={`${s.telf} ${s.check1}`}>{el.end}</li>
										<li className={`${s.telf}`}>{el.q}</li>
										<li className={`${s.telf}`}>{el.area}</li>
										<li className={`${s.telf}`}>{el.exactLocation}</li>
									</ul>
								</div>
							)
						})}
				</div>
			</AccordionItem>
		</Accordion>
	)
}
