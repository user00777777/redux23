import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CircuitGate from '../CircuitGate'
import s from './cssGate/oneGate.module.css'

export default function Info({ my }) {
	const [bool, setBool] = useState(false)
	let wrRef = useRef()

	// console.log(my)

	function f() {
		if (my.gate == 11 || my.gate == 3) return 'Схема'
		return false
	}

	return (
		<div className={s.con}>
			<ul ref={wrRef} className={s.wrap}>
				<li className={[s.item, s.item1, s.blinck]}>
					Ворота <b>№{my?.gate}</b>
				</li>
				<li className={[s.item, s.item2]}>
					Запитано от
					<br />
					<b> {my.rp}</b>
				</li>
				<li className={[s.item, s.item3]}>
					Автомат <b>{my.avt}</b>
				</li>
				<li className={[s.item, s.item4]}>
					Двигатель: <b>{my.engine} kw</b>
				</li>{' '}
				{f() && (
					<li className={[s.item, s.item5]}>
						{' '}
						<Link to='/circuitGate'> {f()}</Link>
					</li>
				)}
			</ul>
		</div>
	)
}
