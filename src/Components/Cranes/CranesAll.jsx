import React, { useEffect, useRef, useState } from 'react'
import s from './cranesAll.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'
import ChildCrane from './ChildCrane'
import { act } from 'react'
import RegCrane from './RegCrane'

export default function CranesAll() {
	const cranes = useSelector(state => state.cranes.craneObj)
	// console.log(cranes)

	let { Q = '', craneId } = cranes || {}
	// console.log(Q) // ''
	// console.log(craneId) // undefined
	const fatherRef = useRef()
	const [activeCrane, setActiveCrane] = useState(true)
	const [crane, setCrane] = useState('')
	const [content, setContent] = useState('')
	// const [click, isClick] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		if (fatherRef.current) {
			fatherRef.current.addEventListener('click', fatherClick)
		}

		function fatherClick(event) {
			const craneList = event.target.classList
			let parentCrane = event.target.parentElement.dataset.crane
			// setCrane(parentCrane)
			// console.log(parentCrane)
			let dataset = event.target.closest(`[data-crane]`)

			if (dataset) {
				// console.log(dataset.dataset.cranes);
			}
			// else{console.log('no dataset');
			// }

			if (event.target.classList.contains(s.craneMin)) {
				craneList.remove(s.craneMin)
				// craneList.add(s.active)
				let li = event.target.closest('li')

				// console.log(li.className);
				// let liEl=li.firstElementChild.classList.add(s.active)
				let liEl = li.firstElementChild
				if (liEl.classList.contains(s.craneInside)) {
					// console.log();
				}

				// console.log('min', parentCrane)

				// setActiveCrane(parentCrane)
				dispatch(craneS(parentCrane))
			} else {
				// setActiveCrane(!activeCrane)
				if (event.target.classList.contains(s.active)) {
					craneList.remove(s.active)
					craneList.add(s.craneMin)
				}
			}
		}

		return () => {
			if (fatherRef.current) {
				fatherRef.current.removeEventListener('click', fatherClick)
			}
		}
	}, [fatherRef])
	function handleComp(num) {
    console.log(num);
    
		setCrane(num)
	}


	return (
		<div ref={fatherRef} className={s.containerCrane}>
			<ul className={s.wrapCrane}>
				<li className={`${s.crane} ${s.crane1}`} data-cranes='7'>
					{crane != '7' ? (
						<ChildCrane
							crane1={{ crane: '1/7', reg: 2349 }}
							crane2={{ crane: '2/7', reg: 7343 }}
							onClick={e => handleComp('7')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane2}`} data-cranes='6'>
					{' '}
					{crane!='6' ? (
						<ChildCrane
							crane1={{ crane: '1/6', reg: 4613 }}
							crane2={{ crane: '2/6', reg: 4964 }}
							crane3={{ crane: '3/6', reg: 8238 }}
							onClick={e => handleComp('6')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane3}`}>
					{' '}
					{crane != 'mal1' ? (
						<ChildCrane
							crane1={{ crane: 'mal1', reg: 5028 }}
							crane2={{ crane: 'mal2', reg: 5054 }}
							onClick={e => handleComp('mal1')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane4}`}>
					{crane!='1' ? (
						<ChildCrane
							crane1={{ crane: '1/1', reg: 7336 }}
							crane2={{ crane: '2/1', reg: 7329 }}
							crane3={{ crane: '3/1', reg: 456 }}
							onClick={e => handleComp('1')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane2}`}>
					{crane != '2' ? (
						<ChildCrane
							crane1={{ crane: '1/2', reg: 1471 }}
							crane2={{ crane: '2/2', reg: 7194 }}
							crane3={{ crane: '3/2', reg: 4062 }}
							onClick={e => handleComp('2')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>

				<li className={`${s.crane} ${s.crane8}`}>
					{crane != '3' ? (
						<ChildCrane
							crane1={{ crane: '1/3', reg: 7213 }}
							crane2={{ crane: '2/3', reg: 7326 }}
							crane3={{ crane: '3/3', reg: 2231 }}
							onClick={e => handleComp('3')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>

				<li className={`${s.crane} ${s.crane6}`}>
					{' '}
					{crane!='4' ? (
						<ChildCrane
							crane1={{ crane: '1/4', reg: 377 }}
							crane2={{ crane: '2/4', reg: 8205 }}
							crane3={{ crane: '3/4', reg: 8244 }}
							onClick={e => handleComp('4')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane5}`} data-class='5'>
					{' '}
					{crane != '5' ? (
						<ChildCrane
							crane1={{ crane: '1/5', reg: 4061 }}
							crane2={{ crane: '2/5', reg: 8210 }}
							crane3={{ crane: '3/5', reg: 7166 }}
							crane4={{ crane: '4/5', reg: 7317 }}
							onClick={e => handleComp('5')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
				</li>
				<li className={`${s.crane} ${s.crane9}`}>
					{' '}
					{crane != 'estOld' ? (
						<ChildCrane
							crane1={{ crane: '1/estOld', reg: 8249 }}
							crane2={{ crane: '2/estOld', reg: 8251 }}
							onClick={e => handleComp('estOld')}
						/>
					) : (
						<RegCrane onClick={e => handleComp(e)} />
					)}
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
				<li className={`${s.copyLi} ${s.copyLi9}`}>Умис</li>
			</ul>
		</div>
	)
}
