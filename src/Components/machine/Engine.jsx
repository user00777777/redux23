import React, { useState, useEffect } from 'react'
import s from './css/Engine/engine.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Engine({ m }) {
	const [sb833, setName] = useState('')
	const [mainEngine, SetmainEngine] = useState('')
	// console.log(m)
// console.log(sb833.power)
// console.log(mainEngine.power)


	let ss = useSelector(state => state.engine.result)
	// console.log(ss)
useEffect(()=>{

if (ss) {
  	ss.forEach(el => {
			setName( el.mainEngine)
		SetmainEngine(	el.hydroelectricStation)
		})
  
}

},[ss]  )


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
      console.log(item);
      
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
					<div className={s.accordion_header}>{sb833.nameEng||'Внести данные'}</div>
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
							<li className={s.engineName}>
								{' '}
								{sb833.engineName || 'Нужно забить базу данных'}
							</li>{' '}
							<li className={s.electricCurrent}> {sb833.electricCurrent}</li>
						</ul>
					</div>
				</div>
				<div
					className={s.accordion_item}
					onClick={() => handleAccordionClick(1)}
				>
					<div className={s.accordion_header}>{mainEngine.nameEng||'Вбить данные нужно'}</div>
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
			</div>
		</div>
	)

              }