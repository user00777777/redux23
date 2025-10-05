import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from '../css/homeComponent/home/Home.module.css'
import PlumbersDuty from '../css/homeComponent/Plambers/PlumbersDuty'
import Duty from './home/Duty'
import GasDuty from './home/gasDuty/GasDuty'
import Warning from './Licence/Warning/Warning'
import Enter from './Enter/Enter'

export default function Homepage() {
	const state = useSelector(state => state.duty.duty)
	// console.log(state)
	// const[e ]=
	// console.log(el,plumb)

	return (
		<div className={s.containerHome}>
			<div className={s.dutyContainer}>
				<Duty duty={state} />
			</div>
			<Enter duty={state} />

			<main className={s.links}>
				<div className={[s.link1, s.link].join(' ')}>
					<Link to='/phones'>
						<span className={s.l}>Телефоныa</span>
					</Link>
				</div>
				<div className={[s.link2, s.link].join(' ')}>
					<Link to='/district23'>
						<span className={s.l}>Участок №23</span>
					</Link>
				</div>
				<div className={[s.link3, s.link].join(' ')}>
					<Link to='Painting'>
						<span className={s.l}>Малярка</span>
					</Link>
				</div>
				<div className={[s.link4, s.link].join(' ')}>
					{' '}
					<Link to='/cranesAll'>
						<span className={s.l}>Краны ОЦЛП</span>
					</Link>{' '}
				</div>
				<div className={[s.link5, s.link].join(' ')}>
					{' '}
					<Link to='licence'>
						<span className={[s.link6, s.link, s.l].join(' ')}>
							Удостоверения
						</span>
					</Link>{' '}
					<Warning />
				</div>
				<div className={[s.link5, s.link].join(' ')}>
					{' '}
					<Link to='inspection'>
						<span className={[s.link7, s.link, s.l].join(' ')}>
							Тех-осмотр тельф.
						</span>
					</Link>{' '}
				</div>
				<div className={[s.link6, s.link].join(' ')}></div>
			</main>
		</div>
	)
}
// <div className={s.duty}>
// 	<Duty />
// </div>
// <div className={s.duty}>
// 	<PlumbersDuty />
// </div>
// <div className= {` ${s.duty} ${s.dutyGas}`}><GasDuty/></div>
// <li className={`${s.duty1} ${s.duty}`}>1</li>
// 				<li className={`${s.duty2} ${s.duty}`}>2</li>
// 				<li className={`${s.duty3} ${s.duty}`}>3</li>
