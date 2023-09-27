import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './cssGate/gate.module.css'
import Gates9 from './Gates9'
import img11 from '../foto/gate11.jpg'
import Info from './Info'
import { imgGate } from '../../../sliceReduce/sliceGates'

export default function Gate() {
	let dispatch = useDispatch()
	let state = useSelector(state => state)
	let main = useRef()
	let logRef = useRef()
	let gate = state?.gates.gates
	const [info, setInfo] = useState()

	// console.log(gate)

	function gates(event) {
		const target = event.target

		// const closest=event.target.closest('li');
		const closestEl = event.target.closest('[data-gate]')
		let gateData = event.target.dataset.gate
		if (closestEl) {
			let strGate = +closestEl.dataset.gate
			console.log(gate)

			for (let i = 0; i < gate.length; i++) {
				console.log(i)

				let myGate = gate[i]
				// console.log(myGate)

				if (strGate === myGate.gate) {
					// console.log('ok')
					// console.log(myGate)

					let reg = new RegExp(`${myGate.gate}`)

					logRef.current?.classList.add(s.log)
					logRef.current.classList.add(s.blinck)
					target.classList.add(s.blinck)
					setTimeout(() => {
						target.classList.remove(s.blinck)
					}, 1580)
					// console.log(myGate.gate)

					dispatch(imgGate(myGate.gate))

					setInfo(<Info my={myGate} />)
				}
			}
		}
	}

	useEffect(() => {
		if (main.current) {
			main.current.addEventListener('click', gates)
		}

		return () => {
			if (main.current) {
				main.current.removeEventListener('click', gates)
			}
		}
	}, [])

	return (
		<div data-t='55' ref={main} className={s.mainGates}>
			<ul className={s.container}>
				<li data-gate='9' className={[s.gate, s.gate1].join(' ')}>
					{' '}
					Ворота<span> #9</span>{' '}
				</li>
				<li data-gate='10' className={[s.gate, s.gate2].join(' ')}>
					Ворота <span>#10</span>
				</li>
				<li data-gate='11' className={[s.gate, s.gate3].join(' ')}>
					Ворота <span>#11</span>
				</li>
				<li data-gate='12' className={[s.gate, s.gate4].join(' ')}>
					Ворота <span>#12</span>
				</li>
				<li data-gate='13' className={[s.gate, s.gate5].join(' ')}>
					Ворота <span>#5</span>
				</li>
			</ul>
			<div data-gate='empty' className={s.district6}>
				{' '}
				<span> 6-й пролет </span>
			</div>
			<div className={s.middle}>
				<div className={s.door}></div>
				<div ref={logRef} className={[s.door].join(' ')}>
					{info}
				</div>
				<div className={s.door}></div>
				<div className={s.door}></div>
				<div className={[s.door, s.doorNot].join(' ')}>
					{' '}
					<div>
						ворота <span>#13</span>
					</div>{' '}
				</div>
			</div>

			<div className={s.preend}>
				<div className={s.seven}>7 пролет </div>
			</div>

			<div className={s.wrapper67}>
				<div data-gate='3' className={[s.gate, s.gate7].join(' ')}>
					ворота <span>#3</span>{' '}
				</div>
			</div>
		</div>
	)
}
