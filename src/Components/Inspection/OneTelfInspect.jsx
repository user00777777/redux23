import React from 'react'
import s from './inspection.module.css'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export default function OneTelfInspect({ daysDifference }) {
	const state = useSelector(state => state.ispectHoist)
	let newState = [...state]

	console.log(daysDifference?.strDays)

	// Сортировка по разнице в днях
	let sortedState = newState.sort((a, b) => a.daysDifference - b.daysDifference)

	// sortedState
	// 	.filter(el => Number(el.daysDifference) < 1 && el.daysDifference >= 0)
	// 	.map(el => {
	// 		console.log(el.telf)
	// 	})

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
						.map((el, id) => (
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
						))}
				</div>
			</AccordionItem>
		</Accordion>
	)
}
