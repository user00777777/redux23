import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { craneS } from '../../sliceReduce/cranesReduser'
import s from './cssCranesShow/show.module.css'

export default function ShowCrane({ crane }) {
	let dispatch = useDispatch()
	let refSel = useRef()
	console.log(crane)
	const refTable = useRef()
	const navigate = useNavigate()



	return (
		<div className={s.container}>
			<div className={s.wrapBut}>
				<button >назад</button>
			</div>
			<div className={`${s.wrapContent} ${s.d}`}>
				<div ref={refTable} className={s.content}></div>
			</div>
			<select ref={refSel} name='' id='sel'>
				<option value='1'>11</option>
				<option value='2'>22</option>
				<option value='3'>33</option>
			</select>
		</div>
	)
}
