import React, { useEffect, useRef, useState } from 'react'
import s from './cranesAll.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'

export default function CranesAll() {
	const fatherRef = useRef()
	const [activeCrane, setActiveCrane] = useState(null)

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
				<li className={`${s.crane} ${s.crane1}`}>
					<div
						data-crane='1/7'
						className={`${s.craneInside} ${
							activeCrane === '1/7' ? s.scale : ''
						}`}
					>
						рег.номер№2349
						{activeCrane === '1/7' && (
							<div className={s.info} data-c='inside'>
								<div>Q={Q}</div>
								<div className={s.sibl}>инв={inv}</div>
							</div>
						)}
					</div>
					<div
						data-crane='2/7'
						className={`${s.craneInside} ${
							activeCrane === '2/7' ? s.scale : ''
						}`}
					>
						рег.номер№7343
						{activeCrane === '2/7' && (
							<div className={s.info} data-c='inside'>
								<div>Q={Q}</div>
								<div className={s.sibl}>инв={inv}</div>
							</div>
						)}
					</div>
				</li>
				<li className={`${s.crane} ${s.crane2}`}>item11</li>
				<li className={`${s.crane} ${s.crane3}`}>item12</li>
				<li className={`${s.crane} ${s.crane4}`}>item12</li>
				<li className={`${s.crane} ${s.crane5}`}>item13</li>
				<li className={`${s.crane} ${s.crane6}`}>item13</li>
				<li className={`${s.crane} ${s.crane7}`}>item13</li>
				<li className={`${s.crane} ${s.crane8}`}>item13</li>
				<li className={`${s.crane} ${s.crane9}`}>item13</li>
			</ul>
			<ul className={s.copyUl}>
				<li className={`${s.copyLi} ${s.copyLi1}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi2}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi3}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi4}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi5}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi6}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi7}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi8}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi9}`}>1</li>
			</ul>
		</div>
	)
}
