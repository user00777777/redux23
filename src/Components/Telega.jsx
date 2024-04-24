import React, { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../css/telega.module.css'
import { getTelf } from '../sliceReduce/tableSlice'
// import repairTel from '../sliceReduce/Telphers/repairTel'
import { Link } from 'react-router-dom'
export const Context = createContext(null)

export default function Telega({ rp, avt, hoist, info, data }) {
	const dispatch = useDispatch()

	const telphersArr = useSelector(state => state.hoist)
	function handleClick(data) {
		dispatch(getTelf(data))

		// console.log( typeof data)
	}
  console.log(telphersArr.o);
  

	let result = avt ? (
		<div>
			<em>
				{
					<Context.Provider value='jkhjklj'>
						{' '}
						<Link to='/repairTel' state={hoist  }>
							{' '}
							Тельф{hoist}
						</Link>{' '}
					</Context.Provider>
				}
			</em>{' '}
			<br /> Автомат --{avt}--{' '}
			<strong>
				{' '}
				<br />
				{info}{' '}
			</strong>
		</div>
	) : rp ? (
		<div className={s.rp}>
			<mark> Тельфер{hoist}</mark> <br /> <b> Рп №{rp}</b>
		</div>
	) : (
		'Дорога'.split('').join('--').toUpperCase().concat('( В никуда)')
	)

	// let result=inf?inf:rp;

	return (
		<div className={s.tel} onClick={() => handleClick(data)}>
			{' '}
			{<b>{result}</b>}
		</div>
	)
}
