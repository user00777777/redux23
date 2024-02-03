import React, { createContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import s from '../cssCranesShow/show.module.css'
import Slider from './Slider'
// export const Context = createContext(null)
export default function ShowCrane({ crane }) {
	let dispatch = useDispatch()
	let refSel = useRef()
	// console.log(crane)
	const refTable = useRef()
	const navigate = useNavigate()
	// console.log(crane.f)
	return (
		<div className={s.container}>
			<div className={s.wrapBut}>
				<button onClick={() => navigate(-1)}>назад</button>
			</div>
			<div className={`${s.wrapContent} ${s.d}`}>
				<div className={s.wrapCrane}>
					<ul className={s.crane}>
						<li className={s.craneName}>Кран Малярки № {crane.name}</li>
						<li>
							Заитан от {' '}
							{crane.rp}
						</li>
					</ul>
				</div>

				<div className={s.slider}>
					<Slider foto={crane.f} />{' '}
				</div>
			</div>
		</div>
	)
}
