import React, { useRef, useState } from 'react'
import { createElement } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import s from '../../css/mashineCss/rarialka.module.css'
import ss from '../../Components/machine/a.module.css'

import r from '../images/mashineFoto/rad/photo_2023-07-11_22-44-56.jpg'

import MachineTools from './machineTools'
import Foto from './Foto'
import Mashine from './Mashine'
import Engine from './Engine'

export default function Radialka() {
	let [selector833] = useSelector(state => state.engine.data833)
	const { mainEngine } = selector833
	let cosF = mainEngine
	console.log(selector833.hydroelectricStation)

	const cosFStr = encodeURIComponent(JSON.stringify(cosF))
	const hydroStr = encodeURIComponent(
		JSON.stringify(selector833.hydroelectricStation)
	)

	const [selectedValue, setSelectedValue] = useState(null)
	const [selectedText, setSelectedText] = useState('')
	let selectRef = useRef()
	let navigate = useNavigate()
	let ref = useRef()
	let [ss, setS] = useState(!false)

	function handleSelectChange() {
		const selectedIndex = selectRef.current.selectedIndex
		setSelectedValue(selectRef.current.value)
		setSelectedText(selectRef.current.options[selectedIndex].textContent)
		console.log(selectRef.current)
	}

	let selector = useSelector(state => state.mashine.result)
	// console.log(selector)  ;
	let numArr = selector?.length - 1
	const mashine = selector[numArr]
	// const cosFStr = encodeURIComponent(JSON.stringify(soF))

	let goBack = () => navigate(-1)

	return (
		<div className={s.father}>
			<div className={s.fatherTwo}>
				<div className={s.imgContainer}>
					{ss ? (
						<Foto mashine={mashine?.el} />
					) : (
						<Mashine mashine={mashine?.el} />
					)}
				</div>
				<button className={s.button} onClick={goBack}>
					Назад
					<div className={s.hoverEffect} ref={ref}>
						<div></div>
					</div>
				</button>
			</div>{' '}
			<div className={s.circuitWrap}>
				<button id={s.circuit} onClick={() => setS(() => !ss)}>
					Схема
				</button>
			</div>
			<div className={s.list}>
				<ul>
					{/* <li><Link to='circuitDiagram'> Схема</Link></li> */}

					{/* <li><Link to='/engine'> Двигателя</Link></li> */}
				</ul>
				<section>
					<details>
						<summary>Двигателя</summary>
						<ul className={s.engines}>
							<li>
								{' '}
								<Link to={`/engine/${hydroStr}`}> Двигатель гидростанции</Link>
							</li>
							<li>
								<Link to={`/engine/${cosFStr}`}>Вращение инструмента</Link>
							</li>
							<li></li>
							<li></li>
						</ul>
					</details>
				</section>
			</div>
		</div>
	)
}
// ;<select
// 	name=''
// 	id=''
// 	className={s.select}
// 	ref={selectRef}
// 	onChange={handleSelectChange}
// >
// 	<option value='eee'>Петриченко</option>
// 	<option value='edffcf'>Шевченко</option>
// 	<option value={true}>Андриенко</option>
// 	<option value={false}>Тригуб</option>
// 	<option value={3}>Дидусь</option>
// </select>
