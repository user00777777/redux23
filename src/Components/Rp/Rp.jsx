import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getRp } from '../../sliceReduce/rpReduser'
import s from './css/rp.module.css'
import DiscrabeRp from './DiscrabeRp'

export default function Rp(props) {
	const [rp, setRp] = useState('')
	const refRp = useRef()
	let state = useSelector(state => state?.rp.res)
	// console.log(props)

	// console.log(state, 'state')
	const rpNumber = '1'
	const dispatch = useDispatch()
	useEffect(() => {
		refRp.current.addEventListener('click', gate)
		return () => {
			if (refRp.current) {
				refRp.current.removeEventListener('click', gate)
			}
		}
	}, [])

	function gate(e) {
		const rp = e.target.closest('h2').dataset.rp

		setRp(rp)

		console.log()

		dispatch(getRp(rp))
	}

	return (
		<div ref={refRp} className={s.container}>
			<div className={s.top}>
				<ul className={s.wrapTop}>
					<li className={`${s.top_item}`}>ГСМ</li>
					<li className={`${s.top_item}`}>Кладовая</li>
					<li className={`${s.top_item} ${s.toilet}`} id={s.toilet}>
						<div>Ж</div>
						<div className={s.m}>М</div>
					</li>
					<li className={`${s.top_item}`}>
						<span>електрики</span>
						<span>23уч</span>
					</li>
				</ul>
			</div>
			<div>
				<ul className={s.wrapGrid}>
					<li className={` ${s.rp}`}>
						<h2>Заезд с Эстакады</h2>
					</li>
					<li className={` ${s.rp}`}>
						<h2 data-rp='14'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №14</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp} ${s.rp_12}`} id={s.r_12}>
						<h2 data-rp='12'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №12</Link>
						</h2>
					</li>
					<li className={` ${s.rp} ${s.tel}`}>
						<h2>Телега инв №051973</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='11'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №11</Link>
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						<h2>ВС-300</h2>
					</li>
					<li className={` ${s.rp}`}>
						<div className={s.vdu}>ВДУ</div>
					</li>
					<li className={` ${s.rp} ${s.gate}`}>
						Ворота <p>№9</p>
					</li>
					<li className={` ${s.rp}`}>
						Ворота <p>№10</p>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='8'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №8</Link>
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='10'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №10</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp}`}>112</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='9'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №9</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='7'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №7</Link>
						</h2>
					</li>
					<li className={` ${s.rp} ${s.tel} `} id={s.telega}>
						<h2>Телега инв №051973</h2>
					</li>
					<li className={` ${s.rp}`}>
						Ворота <p>№11</p>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='4'>
							<Link to={`/discrabeRp/${rp}`}>РП №4</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='3'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №3</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='2'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №2</Link>
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='1'>
							<Link to={`/discrabeRp/${rp}`}>РП №1</Link>{' '}
						</h2>
					</li>
					<li className={` ${s.rp}	${s.tel}`}>
						<h2>Телега №052087</h2>
					</li>
					<li className={` ${s.rp}`}>
						Ворота <p>№12</p>
					</li>
					<li className={` ${s.rp}`}>
						<h2>Дорога</h2>
					</li>
					<li className={` ${s.rp}`}>
						Ворота <p>№5</p>
					</li>
					<li className={` ${s.rp}`}>
						Ворота <p>№13</p>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='6'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №6</Link>
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						{' '}
						<h2 data-rp='5'>
							{' '}
							<Link to={`/discrabeRp/${rp}`}>РП №5</Link>
						</h2>
					</li>
					<li className={` ${s.rp}`}>
						<div className={s.tel}>
							<h2>Телега №051656</h2>
						</div>
					</li>
					<li className={` ${s.rp}`}>ГРП</li>
					<li className={` ${s.rp}`}>
						<div className={s.sh_R}>
							{' '}
							<h2 data-rp='18'>ШР №18</h2>
						</div>
					</li>
					{/* {state && <DiscrabeRp all_rp={state} />} */}

					{/* <li className={` ${s.rp}`}>Ворота</li> */}
				</ul>
			</div>
		</div>
	)
}
