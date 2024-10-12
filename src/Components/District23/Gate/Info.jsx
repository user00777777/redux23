import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './cssGate/oneGate.module.css'

export default function Info({ my }) {
	const [bool, setBool] = useState(false)
	let wrRef = useRef()

	function f() {
		if (my.gate == 11 || my.gate == 3) return 'Схема'
		return false
	}

	const gateScheme = f()

	return (
		<div className={s.con}>
			<ul ref={wrRef} className={s.wrap}>
				<li className={[s.item, s.item1, s.blinck].join(' ')}>
					Ворота <b>№{my?.gate}</b>
				</li>
				<li className={[s.item, s.item2].join(' ')}>
					Запитано от
					<br />
					<b> {my.rp}</b>
				</li>
				<li className={[s.item, s.item3].join(' ')}>
					Автомат <b>{my.avt}</b>
				</li>
				{my.engine && (
					<li className={[s.item, s.item4].join(' ')}>
						Двигатель: <b>{my.engine} kw</b>
					</li>
				)}
				{gateScheme && (
					<li className={[s.item, s.item5].join(' ')}>
						<Link to='/circuitGate'> {gateScheme}</Link>
					</li>
				)}
			</ul>
		</div>
	)
}
