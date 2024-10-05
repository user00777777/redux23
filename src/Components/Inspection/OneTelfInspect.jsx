import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import { useRef, useState, useEffect } from 'react' // Хуки React
import { useSelector } from 'react-redux' // Хук Redux
import s from './inspection.module.css'
import useStore from '../../Zustund/firstZ'

export default function OneTelfInspect({ daysDifference }) {
	const refActiv = useRef()
	const state = useSelector(state => state.ispectHoist)
	const [arrTelf, setArrTelf] = useState([])
  const hoists = useStore.getState().hoists
	const hoistForDays = useStore.getState().hoistForDays

	console.log('Hoists:', hoists)
	console.log('Hoists for Days:', hoistForDays)
const { getHoistsForDays, addHoistForDays } = useStore()
useEffect(() => {
  addHoistForDays(arrTelf)
}, [])
console.log(getHoistsForDays())
const sortedState = [...state].sort(
  (a, b) => a.daysDifference - b.daysDifference
)

	useEffect(() => {
		const newArrTelf = reduceHandleClick(
			sortedState,
			daysDifference.num,
			daysDifference.strDays
		)

		// Простая проверка изменения состояния
		if (newArrTelf.length !== arrTelf.length) {
			setArrTelf(newArrTelf)
		}
	}, [sortedState, daysDifference])

	const handleItemClick = () => {
		if (daysDifference?.handleClick) {
			daysDifference.handleClick(daysDifference.strDays)
		}
	}

	return (
		<Accordion className={s.headAccord}>
			<AccordionItem
				header={`${daysDifference?.strDays} ${
					daysDifference?.num === 10 ? 'дней' : ''
				}`}
				className={s.accordion}
				onClick={handleItemClick}
			>
				<div className={s.wrapOneTelf} ref={refActiv}>
					<ul className={s.headTelf}>
						<li className={`${s.itemTelf} ${s.telferHead}`}>Тельфер</li>
						<li className={`${s.itemTelf} ${s.check}`}>Проверено</li>
						<li className={`${s.itemTelf} ${s.check}`}>Сдача</li>
						<li className={s.itemTelf}>Q</li>
						<li className={s.itemTelf}>Пролет</li>
						<li className={`${s.itemTelf} ${s.days}`}>Место</li>
					</ul>
					{arrTelf &&
						arrTelf.map((el, id) => (
							<div key={id}>
								<ul className={s.wrapContent} id={s.wrapTelf}>
									<li className={`${s.telf} ${s.telfer}`}>{el.telf}</li>
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

const reduceHandleClick = (state, differenceNam, difStr) => {

	return state.reduce((acc, el) => {
		const conditions = [
			{
				days: 'год',
				valid: el.daysDifference < differenceNam && el.daysDifference >= 0,
			},
			{
				days: 'месяц',
				valid: el.daysDifference < differenceNam && el.daysDifference >= 0,
			},
			{
				days: 'полгода',
				valid: el.daysDifference < differenceNam && el.daysDifference >= 0,
			},
			{
				days: 'десять',
				valid: el.daysDifference < differenceNam && el.daysDifference >= 0,
			},
			{
				days: 'два года',
				valid: el.daysDifference < differenceNam && el.daysDifference >= 0,
			},
		]

		const matchedCondition = conditions.find(
			cond => cond.days === difStr && cond.valid
		)
		if (matchedCondition) {
			acc.push(el) // Важно возвращать объект, а не только поле el.telf
		}

		return acc
	}, [])
}
