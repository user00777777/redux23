import React, { useEffect, useRef, useState } from 'react'
import s from './inspection.module.css'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import useStore from '../../Zustund/firstZ'

export default function OneTelfInspect({ daysDifference }) {
	const refActiv = useRef()
	const state = useSelector(state => state.ispectHoist)
	const [ind, setInd] = useState(true)

	// Подключаем Zustand store
	const { increment, count, removeAllCounts, decrement, updateCounts } =
		useStore()

	// Сортируем состояние по daysDifference
	const sortedState = [...state].sort(
		(a, b) => a.daysDifference - b.daysDifference
	)

	// Функция для обработки кликов
	const handleItemClick = () => {
		sortedState.filter(el => {
			const conditions = [
				{
					days: 'год',
					valid:
						el.daysDifference < daysDifference.num && el.daysDifference >= 0,
				},
				{
					days: 'месяц',
					valid:
						el.daysDifference < daysDifference.num && el.daysDifference >= 0,
				},
				{
					days: 'полгода',
					valid:
						el.daysDifference < daysDifference.num && el.daysDifference >= 0,
				},
				{
					days: 'десять',
					valid:
						el.daysDifference < daysDifference.num && el.daysDifference >= 0,
				},
				{
					days: 'два года',
					valid:
						el.daysDifference < daysDifference.num && el.daysDifference >= 0,
				},
			]

			const matchedCondition = conditions.find(
				cond => cond.days === daysDifference.strDays && cond.valid
			)

			if (matchedCondition && daysDifference?.handleClick) {
				daysDifference.handleClick(daysDifference.strDays)
			}
		})
	}
// useEffect(() => {
//   handleItemClick()
// },[])
	return (
		<Accordion className={s.headAccord}>
			<AccordionItem
				header={`${daysDifference?.strDays} ${
					daysDifference?.num === 10 ? 'дней' : ''
				}`}
				className={s.accordion}
				data-datas={daysDifference?.datas}
				data-dataw='dd'
				onClick={handleItemClick} // Добавляем событие клика
			>
				<div className={s.wrapOneTelf} ref={refActiv}>
					<ul className={s.headTelf}>
						<li className={`${s.itemTelf} ${s.telferHead}`}>Тельфер</li>
						<li className={`${s.itemTelf} ${s.check}`}>Проверено</li>
						<li className={`${s.itemTelf} ${s.check}`}>Сдача</li>
						<li className={`${s.itemTelf} ${s.q}`}>Q</li>
						<li className={s.itemTelf}>Пролет</li>
						<li className={`${s.itemTelf} ${s.days}`}>Место</li>
					</ul>
					{sortedState
						.filter(
							el =>
								el.daysDifference < daysDifference.num && el.daysDifference >= 0
						)
						.map((el, id) => (
							<div key={id}>
								<ul
									className={s.wrapContent}
									id={s.wrapTelf}
									data-datas={daysDifference?.datas}
								>
									<li className={`${s.telf} ${s.telfer}`}> {el.telf}</li>
									<li className={`${s.telf} ${s.check1}`}>{el.start}</li>
									<li className={`${s.telf} ${s.check1}`}>{el.end}</li>
									<li className={s.telf}>{el.q}</li>
									<li className={s.telf}>{el.area}</li>
									<li className={`${s.telf} ${s.exactLocation}`}>
										{el.exactLocation}
									</li>
								</ul>
							</div>
						))}
				</div>
			</AccordionItem>
		</Accordion>
	)
}
