import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { craneS } from '../../sliceReduce/cranesReduser'
import s from './cssCranesShow/show.module.css'

export default function ShowCrane({ crane }) {
	let dispatch = useDispatch()
	console.log(crane)
	const refTable = useRef()
	let state = useSelector(state => state.cranes.answer)
	console.log(state)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(craneS(crane))
		f(state)
	}, [crane, state])
	function f(el) {
		let table = refTable.current
		const $table = document.createElement('table'),
			$tbody = document.createElement('tbody'),
			$thead = document.createElement('thead'),
			$tr = document.createElement('tr'),
			$th = document.createElement('th'),
			$thName = document.createElement('th')
		if (el?.rp) {
			$thName.innerHTML = el?.id == undefined ? ' ' : el?.id
		} else {
			$thName.classList.remove(s.thName)
			$thName.innerHTML = ' '
		}
		if (el?.rp) {
			$th.innerHTML = `Запитано от РП № ${el?.rp}`
		} else {
			$th.classList.remove(s.thRp)
			$th.innerHTML = ''
		}

		$th.classList.add(s.thRp)
		$thName.classList.add(s.thName)
		$tr.append($thName)
		$tr.append($th)
		$tbody.append($tr)
		$table.append($tbody)
		table.append($table)
	}
	let handleBack = () => {
		navigate(-1)
		table = null
	}
	// console.log(crane)

	return (
		<div className={s.container}>
			<div className={s.wrapBut}>
				<button onClick={handleBack}>назад</button>
			</div>
			<div className={`${s.wrapContent} ${s.d}`}>
				<div ref={refTable} className={s.content}></div>
			</div>
		</div>
	)
}
