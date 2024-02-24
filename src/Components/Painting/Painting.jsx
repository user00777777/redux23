import React, { useEffect, useState } from 'react'
import s from './Painting_css_Scss/Paint_css/mainPainting.module.css'
import { Link } from 'react-router-dom'
import data from '../data/data'
import { GiLargePaintBrush } from 'react-icons/gi'
export default function Painting() {
	const [myClass, setClass] = useState(false)

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		const num = data().seconds % 2 === 0
	// 		const classes = num ? s.activ : s.no
	// 		setClass(classes)
	// 	},[])

	// 	return () => clearInterval(interval) // Очищаем интервал при размонтировании компонента
	// }, []) // Пустой массив зависимостей означает, что эффект выполняется только при монтировании
	// console.log(myClass)

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
					{/* Добавьте остальные элементы списка здесь */}
				</ul>
			</div>
		</div>
	)
}
