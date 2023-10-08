import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import s from './css/discrabe.module.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function DiscrabeRp() {
	const state = useSelector(state => state?.rp.res)
	let navigate = useNavigate()
	const { rp } = useParams()
	const tableRef = useRef()
	const table = tableRef.current
	console.log(table)
	const [el, setElement] = useState({})

	const $table = document.createElement('table'),
		$tbody = document.createElement('tbody')

	// }
	useEffect(() => {
		state?.forEach(el => {
			setElement(el)
		})
	}, [state])

	console.log(state)

	return (
		<div className={s.container}>
			<div className={s.btnWrap}>
				<button onClick={() => navigate(-1)}>back</button>
			</div>
			<ul className={s.wrapName}>
				<li>Наименование</li>
				<li>
					<span>ток</span> уставки
				</li>
				<li>ном-й Ток</li>
				<li>квт</li>
			</ul>
			<div ref={tableRef} className={s.wrapper}>
				{state.map(el => {
					return (
						<div className={s.wrapList}>
							<div className={s.name}> {el.name}</div>
							<div className={s.i}> {el.I}</div>
							<div className={s.nom}> {el.nom}</div>
							<div className={s.kvt}> {el.kvt}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
