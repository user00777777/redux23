import React, { useEffect, useRef } from 'react'
import s from './warning.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { employees } from '../../../sliceReduce/employeesSlice'

export default function Warning() {
	const dispatch = useDispatch()
	const state = useSelector(state => state.job.resNum)
	const contRef = useRef(null) // Используем useRef для доступа к DOM-элементу

	useEffect(() => {
		const dates = new Date()
		dispatch(employees(dates.toISOString()))
	}, [dispatch])

	useEffect(() => {
		const cont = contRef.current

		if (state && cont) {
			state.forEach(el => {
				const value = Number(el)
				if (value === 10) { 
					// console.log(1)
					cont.classList.add(s.ones)
					// console.log(cont.className)
				} else if (value === 30) {
					// console.log('ok')
					cont.classList.add(s.active)
					// console.log(cont.className)
				} else if (value === 60) {
					// console.log(30)
					cont.classList.add(s.thirty)
				}
			})
		}
	}, [state]) // Добавляем зависимость от state для обновления при изменении

	return <div ref={contRef} className={s.container}></div>
}
