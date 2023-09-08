import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { craneS } from '../../sliceReduce/cranesReduser'

export default function ShowCrane({ crane }) {
	let dispatch = useDispatch()
	let state = useSelector(state => state.cranes)
	console.log(state)
	const navigate = useNavigate()
	let handleBack = () => navigate(-1)
	useEffect(() => {
		dispatch(craneS(crane))
	}, [])
	// console.log(crane)
	return (
		<div>
			<button onClick={handleBack}>назад</button>
		</div>
	)
}
