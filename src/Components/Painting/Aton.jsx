import React, { useState } from 'react'
import s from './Aton/atonStyle/aton.module.css'
import atonImg from './Aton/atonFoto/aton250_150.jpg'
import Atons from './Aton/Atons'
export default function Aton(props) {
	const [item, setItem] = useState('')

	function hahdleClick(prop) {
		setItem(prop)
	}

	return (
		<div className={s.container}>
			<nav className={s.navAton}>
				<ul>
					<li
						onClick={() => {
							hahdleClick('150')
						}}
					>
						Aton150
					</li>
					<li
						onClick={() => {
							hahdleClick('250')
						}}
					>
						Aton250
					</li>
				</ul>
			</nav>

			<div className={s.imgAton}>
				{' '}
				<img src={atonImg} alt='Схема_Атон' />
			</div>
			<div>
				<Atons aton={item} />
			</div>
		</div>
	)
}
