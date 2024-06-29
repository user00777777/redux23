import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'
import s from './cranesCss/cranes.module.css'
import ShowCrane from './ShowCranes/ShowCrane'
import { Accordion } from '@szhsin/react-accordion'
import one6 from './FotoCrane/one_Crane/1_6.jpg'
import AccordionCrane from './ShowCranes/AccordionCrane'

const Cranes = () => {
	const [selectedCrane, setSelectedCrane] = useState(null)
	const dispatch = useDispatch()
	const craneData = useSelector(state => state.cranes.list)
	const refParent = useRef(null)
	const [obj, setObj] = useState(null)
	const state = useSelector(state => state.cranes.list)
	const [isBool, setBool] = useState(false)
  const [crane, setCrane] = useState('')
	// console.log(obj);
//   if (obj) {
//     const{craneId}=obj
// setCrane(craneId)  
// }

	useEffect(() => {
		const parent = refParent.current

		const handleClick = e => {
			const data = e.target.closest('[data-crane]')?.dataset.crane

			if (data) {
				// console.log(craneData)

				const selected = craneData.find(crane => crane.cranName === data)
				setSelectedCrane(selected)
				dispatch(craneS(data))
				// console.log('if', selected, data)
			}
		}

		parent.addEventListener('click', handleClick)

		return () => {
			parent.removeEventListener('click', handleClick)
		}
	}, [craneData, dispatch])
	// if (selectedCrane) {
	// 	return <ShowCrane crane={selectedCrane} />
	// }
	function accar(num) {
		setBool(!isBool)
		state.forEach(el => {
			if (el.cranName == num) {
				// console.log(el)

				setObj(el)
			}
		})
	}

	return  (
		<div ref={refParent} className={s.container}>
			<div className={s.wrapper}>
				<div className={s.wrapCrane}>
					<div
						className={`${s.crane}  ${s.oneCrane6} `}
						onClick={() => {
							accar('mal1')
						}}
					>
						Эстакада
					</div>
					<div className={s.child}>5028</div>
				</div>
				<div className={s.wrapCrane}>
					<div
						className={`${s.crane}  ${s.twoCrane6} `}
						onClick={() => {
							accar('1/6')
						}}
					>
						1/6
					</div>
					<div className={s.child}>4613</div>
				</div>
				<div className={s.wrapCrane}>
					<div
						className={`${s.crane}  ${s.twoCrane6} `}
						onClick={() => {
							accar('2/6')
						}}
					>
						2/6
					</div>
					<div className={s.child}>4964</div>
				</div>
				<div className={s.wrapCrane}>
					<div
						className={`${s.crane}  ${s.oneCrane7} `}
						onClick={() => {
							accar('3/6')
						}}
					>
						3/6
					</div>
					<div className={s.child}>8238</div>
				</div>
				<div className={s.wrapCrane}>
          <div
            className={`${s.crane}  ${s.oneCraneMal} `}
            onClick={() => {
              accar('1/7')
            }}
          >
            1/7
          </div>    





          
					<div className={s.child}>2349</div>
        </div>
			</div>
			<div className={s.accordion}>
				{isBool && (
					<AccordionCrane
						{...obj}
						t={isBool}
						className={`${s.crane}  ${s.oneCrane7} `}
					/>
				)}
			</div>
		</div>
	)
}

export default Cranes
