import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import s from './css/discrabe.module.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import fotoRp from './fotoRp'

export default function DiscrabeRp() {
	const state = useSelector(state => state?.rp.res)
	const stateRp = useSelector(state => state?.rp)
	console.log(stateRp)

	let navigate = useNavigate()
	const { rp } = useParams()
	const tableRef = useRef()
	const table = tableRef.current
	const [el, setElement] = useState({})

	// }
	useEffect(() => {
		state?.forEach(el => {
			setElement(el)
		})
	}, [state])

	return (
		<div className={s.container}>
			<div className={s.btnWrap}>
				<button onClick={() => navigate(-1)}>Назад</button>
			</div>

			<ul className={s.wrapName}>
				<li>№</li>
				<li>Наименование</li>
				<li className={s.i_ust}>
					<span className={s.sp}>ток</span> уст.
				</li>
				<li>Ном. Ток</li>
				<li>квт</li>
			</ul>
			<div ref={tableRef} className={s.wrapper}>
				{state?.map((el, id) => {
					return (
						<div className={s.wrapList} key={id}>
							<div className={s.ii}> {el.ii}</div>

							<div className={s.name}> {el.name}</div>
							<div className={s.i}> {el.I} </div>
							<div className={s.nom}> {el.nom}</div>
							<div className={s.kvt}> {el.kvt}</div>
						</div>
					)
				})}
			</div>
			<div className={s.wrapImg}>
				<img src={fotoRp(stateRp)} alt='' />
			</div>
		</div>
	)
}
