import React from 'react'
import { useSelector } from 'react-redux'
import s from './Gate/cssGate/circuitGate.module.css'
import g11 from './foto/gate11.jpg'
import { useNavigate } from 'react-router-dom'
export default function CircuitGate() {
	let state = useSelector(state => state.gates.arrImg)
	let navigate = useNavigate()
	let arImg = [g11]
	console.log(state)

	function f(s) {
		let copyAr = [...arImg]
		return copyAr[0]
	}
	// console.log(f(state));
	const goBack = () => navigate(-1)
	return (
		<div className={s.container}>
			<div className={s.btnWrap}>
				<button onClick={goBack}>Назад</button>
			</div>
			<div className={s.imgWrap}>
				<img src={f(state)} alt='' />
			</div>
		</div>
	)
}
