import React, { useEffect, useRef, useState } from 'react'
import s from './cranesAll.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'
import ChildCrane from './ChildCrane'

export default function CranesAll() {
	const fatherRef = useRef()
	const [activeCrane, setActiveCrane] = useState(null)
	const [crane, setCrane] = useState('')

	const dispatch = useDispatch()
	const cranes = useSelector(state => state.cranes.craneObj)
	console.log(cranes)
	console.log(activeCrane)
	let { Q, inv } = cranes

	useEffect(() => {
		if (fatherRef.current) {
			fatherRef.current.addEventListener('click', fatherClick)
		}

		function fatherClick(event) {
			const craneName = event.target.dataset.crane
			let parentCrane = event.target.parentElement.dataset.crane

			setCrane(parentCrane)

			if (event.target.classList.contains(s.craneInside) && craneName) {
				setActiveCrane(craneName)
				dispatch(craneS(craneName))
			} else {
				const isInfoNode = event.target.closest(`.${s.info}`)
				if (!isInfoNode) {
					setActiveCrane(null)
				}
			}
		}

		return () => {
			if (fatherRef.current) {
				fatherRef.current.removeEventListener('click', fatherClick)
			}
		}
	}, [fatherRef])

	return (
		<div ref={fatherRef} className={s.containerCrane}>
			<ul className={s.wrapCrane}>
				<li className={`${s.crane} ${s.crane1}`} data-crane='7'>
					<ChildCrane
						crane1={{ crane: '1/7', reg: 2349 }}
						crane2={{ crane: '2/7', reg: 7343 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane2}`}>
					{' '}
					<ChildCrane
						crane1={{ crane: '1/6', reg: 4613 }}
						crane2={{ crane: '2/6', reg: 4964 }}
						crane3={{ crane: '3/6', reg: 8238 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane3}`}>
					{' '}
					<ChildCrane
						crane2={{ crane: '1/6', reg: 5028 }}
						// crane3={{ crane: '3/6', reg: 8238 }}
						crane1={{ crane: '2/6', reg: 5054 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane4}`}>
					<ChildCrane
						crane1={{ crane: '1/6', reg: 7336 }}
						crane2={{ crane: '2/6', reg: 7329 }}
						crane3={{ crane: '3/6', reg: 456 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane2}`}>
					<ChildCrane
						crane1={{ crane: '1/6', reg: 1471 }}
						crane2={{ crane: '2/6', reg: 7194 }}
						crane3={{ crane: '3/6', reg: 4062 }}
					/>
				</li>

				<li className={`${s.crane} ${s.crane8}`}>
					<ChildCrane
						crane1={{ crane: '1/6', reg: 7213 }}
						crane2={{ crane: '2/6', reg: 7326 }}
						crane3={{ crane: '3/6', reg: 2231 }}
					/>
				</li>

				<li className={`${s.crane} ${s.crane6}`}>
					{' '}
					<ChildCrane
						crane1={{ crane: '1/6', reg: 377 }}
						crane2={{ crane: '2/6', reg: 8205 }}
						crane3={{ crane: '3/6', reg: 8244 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane5}`} data-class='5'>
					{' '}
					<ChildCrane
						crane1={{ crane: '1/6', reg: 4061 }}
						crane2={{ crane: '2/6', reg: 8210 }}
						crane3={{ crane: '3/6', reg: 7166 }}
						crane4={{ crane: '4/6', reg: 7317 }}
					/>
				</li>
				<li className={`${s.crane} ${s.crane9}`}>
					{' '}
					<ChildCrane
						crane1={{ crane: '1/6', reg: 249 }}
						crane2={{ crane: '2/6', reg: 8251 }}
					/>
				</li>
			</ul>
			<ul className={s.copyUl}>
				<li className={`${s.copyLi} ${s.copyLi1}`}>7</li>
				<li className={`${s.copyLi} ${s.copyLi2}`}>6</li>
				<li className={`${s.copyLi} ${s.copyLi3}`}>эст</li>
				<li className={`${s.copyLi} ${s.copyLi4}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi5}`}>2</li>
				<li className={`${s.copyLi} ${s.copyLi6}`}>3</li>
				<li className={`${s.copyLi} ${s.copyLi7}`}>4</li>
				<li className={`${s.copyLi} ${s.copyLi8}`}>5</li>
				<li className={`${s.copyLi} ${s.copyLi9}`}>эст</li>
			</ul>
		</div>
	)
}
