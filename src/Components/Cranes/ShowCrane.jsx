import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { craneS } from '../../sliceReduce/cranesReduser'
import s from './cssCranesShow/show.module.css'

export default function ShowCrane({ crane }) {
	let dispatch = useDispatch()
	console.log(crane)

	let state = useSelector(state => state.cranes.answer)
	console.log(state)
	const navigate = useNavigate()
	let handleBack = () => navigate(-1)
	useEffect(() => {
		dispatch(craneS(crane))
	}, [])
	// console.log(crane)
	return (
		<div className={s.container}>
			<div className={s.wrapBut}>
				<button onClick={handleBack}>назад</button>
			</div>
			<div className={s.content}></div>
		</div>
	)
}
