import React from 'react'
import s from './reg.module.css'
import { useSelector } from 'react-redux'
export default function RegCrane({ onClick }) {
	const cranes = useSelector(state => state.cranes.craneObj)
	// console.log(cranes)

	let { Q = '', craneId, inv } = cranes || {}
	// console.log(Q) // ''
	// console.log(craneId) //

	// console.log(inv,'inv')

	return (
		<div onClick={onClick} className={s.container}>
			<ul className={s.wrapper}>
				<li className={`${s.item} ${s.item1}`}> Q={Q} </li>{' '}
				<li className={`${s.item} ${s.item2}`}> инв№ {inv} </li>{' '}
				<li className={`${s.item} ${s.item3}`}> рег№{craneId} </li>{' '}
			</ul>
		</div>
	)
}
