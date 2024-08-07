import React, { createContext, useEffect, useRef, useState } from 'react'
import { createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import s from '../../css/mashineCss/rarialka.module.css'
import ss from '../../Components/machine/a.module.css'

import r from '../images/mashineFoto/rad/photo_2023-07-11_22-44-56.jpg'

import MachineTools from './machineTools'
import Foto from './Foto'
import Mashine from './Mashine'
import Engine from './Engine'
import { engine833 } from '../../sliceReduce/engineREduser'
const MyContexst = createContext()

export default function Radialka() {
	const contexst = 'my contexst'
	const dispatch = useDispatch()
	let [selector833] = useSelector(state => state.engine.data833)
	const { mainEngine } = selector833
	let cosF = mainEngine
	// console.log(mainEngine)
	let y = useSelector(state => state.engine)
	// console.log(y)

	// console.log(selector833.hydroelectricStation)

	const cosFStr = encodeURIComponent(JSON.stringify(cosF))
	const hydroStr = encodeURIComponent(
		JSON.stringify(selector833.hydroelectricStation)
	)

	const [selectedValue, setSelectedValue] = useState(null)
	const [selectedText, setSelectedText] = useState('')
	let selectRef = useRef()
	let navigate = useNavigate()
	let ref = useRef()
	let [ss, setS] = useState(true)

	let selector = useSelector(state => state.mashine.result)
	let goBack = () => {
		navigate(-1)
		dispatch(engine833('empty'))
	}
  console.log(selector);
  
const[objMachine]=selector;
const{machine}=objMachine



	// let lastNum = selector.length - 4


	// let numArr = selector?.length - 1
	// const mashine = selector[numArr]

	// const cosFStr = encodeURIComponent(JSON.stringify(soF))
	// const name = mashine?.el.machine
	// console.log(name)
	useEffect(() => {
		dispatch(engine833(machine))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [machine])

	const yourMashine = useSelector(state => state.engine.result)
	console.log(objMachine)

	return (
		<div className={s.father}>
			<div className={s.fatherTwo}>
				<div className={s.imgContainer}>
					{ss ? (
						<Foto mashine={objMachine} />
					) : (
						<Mashine mashine={objMachine} />
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
				<Engine m={yourMashine} />
			</div>
		</div>
	)
}
