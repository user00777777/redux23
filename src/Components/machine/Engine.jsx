import React, { useState, useEffect } from 'react'
import s from './css/Engine/engine.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Engine({ m }) {
	console.log(m)

	// let selector = useSelector(state => state.engine.data833)
	const [name] = m
	const sb833 = name.hydroelectricStation
	const mainEngine = name.mainEngine

	const navigate = useNavigate()
	let goBack = () => navigate(-1)

	const [accordionItems, setAccordionItems] = useState([])

	useEffect(() => {
		const items = Array.from(document.querySelectorAll(`.${s.accordion_item}`))
		setAccordionItems(items)
	}, [])

	const handleAccordionClick = index => {
		const newAccordionItems = accordionItems.map((item, i) => {
			if (i === index) {
				const content = item.querySelector(`.${s.accordion_content}`)
				content.style.display =
					content.style.display === 'block' ? 'none' : 'block'
			}
			return item
		})
		setAccordionItems(newAccordionItems)
	}

	return (
		<div className={s.wrapperE}>
			<div className={s.accordion}>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(0)}
				>
					<div className={s.accordion_header}>Заголовок 1</div>
					<div className={s.accordion_content}>
						<ul className={s.wrapMap}>
							<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
							<li className={`${s.power} ${s.f}`}>Подшипники</li>
							<li className={`${s.rpm} ${s.f}`}>оброты</li>
							<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
							<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
							<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
							<li className={s.mainEngine_power}> {sb833.power}</li>
							{sb833.cosF ? (
								<li className={s.mainEngine_starterA1}> {sb833.cosF}</li>
							) : (
								<li className={s.mainEngine_starterA1}> {sb833.bearing}</li>
							)}
							<li className={s.mainEngine_rpm}> {sb833.Engine_rpm}</li>
							<li className={s.CircuitBreaker}> {sb833.weight}</li>
							<li className={s.shaftDiameter}> {sb833.shaftDiameter}</li>
							<li className={s.engineName}> {sb833.engineName}</li>{' '}
							<li className={s.electricCurrent}> {sb833.electricCurrent}</li>
						</ul>
					</div>
				</div>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(1)}
				>
					<div className={s.accordion_header}>Заголовок 2</div>
					<div className={s.accordion_content}>
						<ul className={s.wrapMap}>
							<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
							<li className={`${s.power} ${s.f}`}>Подшипники</li>
							<li className={`${s.rpm} ${s.f}`}>оброты</li>
							<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
							<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
							<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
							<li className={s.mainEngine_power}> {mainEngine.power}</li>
							{mainEngine.cosF ? (
								<li className={s.mainEngine_starterA1}> {mainEngine.cosF}</li>
							) : (
								<li className={s.mainEngine_starterA1}> {mainEngine.bearing}</li>
							)}
							<li className={s.mainEngine_rpm}> {mainEngine.Engine_rpm}</li>
							<li className={s.CircuitBreaker}> {mainEngine.weight}</li>
							<li className={s.shaftDiameter}> {mainEngine.shaftDiameter}</li>
							<li className={s.engineName}> {mainEngine.engineName}</li>{' '}
							<li className={s.electricCurrent}> {mainEngine.electricCurrent}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)

	// return (
	// 	<div className={s.wrapperE}>
	// 		<div className={s.accordion}>
	// 			<div
	// 				className={s.accordion_item}
	// 				onClick={() => handleAccordionClick(0)}
	// 			>
	// 				<div className={s.accordion_header}>Заголовок 1</div>
	// 				<div className={s.accordion_content}>Содержание 1</div>
	// 			</div>
	// 			<div
	// 				className={s.accordion_item}
	// 				onClick={() => handleAccordionClick(1)}
	// 			>
	// 				<div className={s.accordion_header}>Заголовок 2</div>
	// 				<div className={s.accordion_content}>Содержание 2</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
}
