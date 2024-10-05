import useStore from '../../Zustund/firstZ'
import s from './inspection.module.css'
import BackPage from '../BackPage/BackPage'
import OneTelfInspect from './OneTelfInspect'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

export default function Inspection() {
	const state = useSelector(state => state.ispectHoist)
	const { increment, count, removeAllCounts, decrement, updateCounts } =
		useStore()
	const [strRes, setStrRes] = useState([])
	const wrapRef = useRef(null)

	const inspectTen = state.some(el => {
		const dif = Number(el.daysDifference)
		return dif >= 0 && dif <= 10
	})

	const inspectMonth = state.some(el => {
		const dif = Number(el.daysDifference)
		return dif >= 0 && dif <= 30
	})

	const inspectHalfaYear = state.some(el => {
		const dif = Number(el.daysDifference)
		return dif >= 0 && dif <= 180
	})

	const inspectYear = state.some(el => {
		const dif = Number(el.daysDifference)
		return dif >= 0 && dif <= 365
	})

	const inspectTwoYear = state.some(el => {
		const dif = Number(el.daysDifference)
		return dif >= 0 && dif <= 730
	})

	// console.log(inspectTwoYear)

useEffect(() => {
	// Убедимся, что wrapRef определён
	if (wrapRef.current) {
		// Пробегаемся по элементам внутри wrapRef
		Array.from(wrapRef.current.children).forEach(element => {
			// Если элемент не содержится в массиве strRes, добавляем класс
			if (!strRes.includes(element.innerText)) {
				element.classList.add(s.activeOff)
			} else {
				element.classList.remove(s.activeOff)
			}
		})
	}
	// Добавляем только strRes в зависимости, убираем wrapRef
}, [strRes])


	const handleClick = str => {
    console.log(str);
    
		const validOptions = ['десять', 'месяц', 'полгода', 'год', 'два года']
		if (validOptions.includes(str)) {
			setStrRes(prevStrRes => {
				if (!prevStrRes.includes(str)) {
					return [...prevStrRes, str]
				}
				return prevStrRes
			})
		}
	}

	const renderOneTelfInspect = (strDays, num, datas) => (
		<OneTelfInspect
			daysDifference={{
				num,
				strDays,
				handleClick,
				datas,
			}}
		/>
	)

	return (
		<div className={s.containerInspect} id={s.c}>
			<BackPage />
			<div className={s.wrapHeader}>
				<h2>Тех-осмотр тельфера {'ОЦЛП'}</h2>
			</div>
			<div className={s.wrapper} ref={wrapRef}>
				{inspectTen && renderOneTelfInspect('десять', 10)}
				{inspectMonth && renderOneTelfInspect('месяц', 30)}
				{inspectHalfaYear && renderOneTelfInspect('полгода', 180)}
				{inspectYear && renderOneTelfInspect('год', 365)}
				{inspectTwoYear && renderOneTelfInspect('два года', 730)}
			</div>
		</div>
	)
}
