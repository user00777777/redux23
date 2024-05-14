/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import s from './../../Components/machine/css/Engine/engine.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Accordion({ name, p, rpm, a, weight, describe }) {
	const [sb833, setName] = useState('')
	const [PrivodRukava, setPrivodRukava] = useState('')
	const [mainEngine, SetmainEngine] = useState('')
	const hideLine = useRef(null)
	// console.log(m)
	// console.log(sb833.power)
	// console.log(mainEngine.power)

	// console.log(name, p, a, rpm, weight)

	const [accordionItems, setAccordionItems] = useState([])

	useEffect(() => {
		const items = Array.from(document.querySelectorAll(`.${s.accordion_item}`))
		setAccordionItems(items)
	}, [])

	const handleAccordionClick = index => {
		const newAccordionItems = accordionItems.map((item, i) => {
			// console.log(i, 'index', index)

			if (i === index) {
				const content = item.querySelector(`.${s.accordion_content}`)
				console.log(content)

				content.style.display =
					content.style.display === 'block' ? 'none' : 'block'
			}
			// console.log(item)

			return item
		})
		setAccordionItems(newAccordionItems)
	}

	const [shaft, setShaft] = useState()
	useEffect(() => {
		const items = Array.from(document.querySelectorAll(`.${s.f}`))
		setShaft(items)
	}, [])

	return (
		<div className={s.wrapperE}>
			<div className={s.accordion}>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(0)}
				>
					<div className={s.accordion_header}>
						{describe || 'Внести данные'}
					</div>
					<div className={s.accordion_content}>
						<ul className={s.wrapMap}>
							<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
							<li className={`${s.power} ${s.f}`}>Подшипники</li>
							<li className={`${s.rpm} ${s.f}`}>оброты</li>
							<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
							<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
							<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
							<li className={s.mainEngine_power}>
								{p} {sb833.power}
							</li>
							{sb833.cosF ? (
								<li className={s.mainEngine_starterA1}> {sb833.cosF}</li>
							) : (
								<li className={s.mainEngine_starterA1}>
									{' '}
									подшипники
								</li>
							)}
							<li className={s.mainEngine_rpm}>
								{rpm} 
							</li>
							<li className={s.CircuitBreaker}>
								{weight}
							</li>
							<li className={s.shaftDiameter}>
								{' '}
								диаметр вала
							</li>
							<li className={s.engineName}>
								{' '}
								{name || 'Нужно забить базу данных'}
							</li>{' '}
							<li className={s.electricCurrent}>
								{a} 
							</li>
						</ul>
					</div>
				</div>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(1)}
				>
					<div className={s.accordion_header}>
						{mainEngine.nameEng || 'Вбить данные нужно'}
					</div>
					<div className={s.accordion_content}>
						<ul className={s.wrapMap}>
							<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
							<li className={`${s.power} ${s.f}`}>Подшипники</li>
							<li className={`${s.rpm} ${s.f}`}>оброты</li>
							<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
							<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
							<li className={`${s.shaftDiameter1} ${s.f} `}>диаметр вала</li>
							<li className={s.mainEngine_power}> {mainEngine.power}</li>
							{mainEngine.cosF ? (
								<li className={s.mainEngine_starterA1}> {mainEngine.cosF}</li>
							) : (
								<li className={s.mainEngine_starterA1}>
									{' '}
									{mainEngine.bearing}
								</li>
							)}
							<li className={s.mainEngine_rpm}> {mainEngine.Engine_rpm}</li>
							<li className={s.CircuitBreaker}> {mainEngine.weight}</li>
							<li className={s.shaftDiameter}> {mainEngine.shaftDiameter}</li>
							<li className={s.engineName}>
								{' '}
								{mainEngine.engineName || 'Нужно набрать данные'}
							</li>{' '}
							<li className={s.electricCurrent}>
								{' '}
								{mainEngine.electricCurrent}
							</li>
						</ul>
					</div>
				</div>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(2)}
					ref={hideLine}
				>
					<div className={s.accordion_header}>
						{PrivodRukava?.nameEng || 'Внести данные'}
					</div>
					<div className={s.accordion_content}>
						<ul className={s.wrapMap}>
							<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
							<li className={`${s.power} ${s.f}`}>Подшипники</li>
							<li className={`${s.rpm} ${s.f}`}>оброты</li>
							<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
							<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
							<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
							<li className={s.mainEngine_power}> {PrivodRukava?.power}</li>
							{sb833.cosF ? (
								<li className={s.mainEngine_starterA1}>
									{' '}
									{PrivodRukava?.cosF}
								</li>
							) : (
								<li className={s.mainEngine_starterA1}>
									{' '}
									{PrivodRukava?.bearing}
								</li>
							)}
							<li className={`${s.mainEngine_rpm} `}>
								{' '}
								{PrivodRukava?.Engine_rpm}
							</li>
							<li className={`${s.CircuitBreaker} `}>
								{' '}
								{PrivodRukava?.weight}
							</li>
							<li className={`${s.shaftDiameter}${s.ss}`}>
								{' '}
								{PrivodRukava?.shaftDiameter}
							</li>
							<li className={s.engineName}>
								{' '}
								{PrivodRukava?.engineName || 'Нужно забить базу данных'}
							</li>{' '}
							<li className={s.electricCurrent}>
								{' '}
								{PrivodRukava?.electricCurrent}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}







