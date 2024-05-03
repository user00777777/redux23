import React, { useEffect, useState } from 'react'
import s from './Painting_css_Scss/Paint_css/mainPainting.module.css'
import { Link, useNavigate } from 'react-router-dom'
import data from '../data/data'
import { GiLargePaintBrush } from 'react-icons/gi'
export default function Painting() {
	const [myClass, setClass] = useState(false)

let navigate= useNavigate()
console.log(navigate());

	return (
		<div className={s.container}>
			<div className={s.nav}>
				<ul className={s.list}>
					<li className={s.item}>
						<GiLargePaintBrush className={s.paintbrush} />{' '}
						<Link to='/aton'>
							<span>Aton150</span>
						</Link>
					</li>
					<li className={s.item}>
						<GiLargePaintBrush className={s.paintbrush} />{' '}
						<Link to='/pumps'>
							<span>Насосы</span>
						</Link>
					</li>
					<li className={s.item}>
						<GiLargePaintBrush className={s.paintbrush} />{' '}
						<Link to='/krons'>
							<span>Кроны</span>
						</Link>
					</li>
					<li className={s.item}>
						<GiLargePaintBrush className={s.paintbrush} />{' '}
						<Link to='/conveyor'>
							<span>Конвеер</span>
						</Link>
					</li>
					<li className={`${s.item} `}>
						<GiLargePaintBrush className={s.paintbrush} />{' '}
						<Link to='/conveyor'>
							<span className={s.vent}>Вентиляция</span>
						</Link>
					</li>
					{/* Добавьте остальные элементы списка здесь */}
				</ul>
			</div>
		</div>
	)
}
