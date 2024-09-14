import useStore from '../../Zustund/firstZ'
import React, { useState, useEffect, useRef } from 'react'
import s from './inspection.module.css'
import BackPage from '../BackPage/BackPage'
import OneTelfInspect from './OneTelfInspect'
import { useSelector } from 'react-redux'

export default function Inspection() {
	const state = useSelector(state => state.ispectHoist)
	const { increment, count, removeAllCounts, decrement, updateCounts } =
		useStore()
	const [strRes, setStrRes] = useState([])
	const wrapRef = useRef(null)
	// console.log(state.length)
	const inspectTen = state.some(el => {
		const dif = el.daysDifference

		return dif >= 0 && dif <= 10
	})
	console.log(inspectTen)
	const inspectMonth = state.some(el => {
		const dif = el.daysDifference

		return dif >= 0 && dif <= 30
	})
	console.log(inspectMonth)
	const inspectHalfaYear = state.some(el => {
		const dif = el.daysDifference

		return dif >= 0 && dif <= 180
	})
	console.log(inspectHalfaYear)
	const inspectYear = state.some(el => {
		const dif = el.daysDifference

		return dif >= 0 && dif <= 365
	})
	console.log(inspectYear)
	const inspectTwoYear = state.some(el => {
		const dif = el.daysDifference

		return dif >= 0 && dif <= 730
	})
	console.log(inspectTwoYear)

	// Хук useEffect для логирования и добавления/удаления класса активного состояния
	useEffect(() => {
		console.log('strRes при рендере:', strRes)

		if (wrapRef.current) {
			Array.from(wrapRef.current.children).forEach(element => {
				if (!strRes.includes(element.innerText)) {
					element.classList.add(s.activeOff)
				} else {
					element.classList.remove(s.activeOff)
				}
			})
		}
	}, [strRes, wrapRef]) // Добавлен wrapRef в зависимости

	// Обработчик кликов, добавляющий элементы в массив состояний
	const handleClick = str => {
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

	// Функция для рендера компонента OneTelfInspect
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
				{inspectYear && renderOneTelfInspect('год', 365, 2)}
				{inspectTwoYear && renderOneTelfInspect('два года', 730)}
			</div>
		</div>
	)
}
