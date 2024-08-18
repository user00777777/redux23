/* eslint-disable react/prop-types */
import React from 'react'
import s from './cranesAll.module.css'
import { useSelector } from 'react-redux'

export default function ChildCrane({
	craneOne,
	crane2,
	crane3 = {},
	crane1,
	crane4 = {},
	children,
	onClick,
}) {
	const craneNum1 = crane1?.crane
	const reg1 = crane1?.reg
	const craneNum2 = crane2?.crane
	const reg2 = crane2?.reg
	const craneNum3 = crane3?.crane
	const reg3 = crane3?.reg
	const craneNum4 = crane4?.crane
	const reg4 = crane4?.reg
	const cranes = useSelector(state => state.cranes.craneObj)

	let { Q = '', craneId } = cranes || {}
	// console.log(Q) // ''
// console.log(children);

	if (children) {
    return <div onClick={onClick}>{children}</div>
  }
  else{
    // console.log('ee');
    

		return (
			<div
				onClick={onClick}
				className={`${s.craneInside} ${reg4 && s.craneInside2}`}
			>
				<div data-crane={craneNum1} className={s.craneMin}>
					<b className={s.craneMin}> №{reg1}</b>
				</div>
				<div data-crane={craneNum2} className={s.craneMin}>
					<b className={s.craneMin}>№{reg2}</b>
				</div>
				{reg3 && (
					<div data-crane={craneNum3} className={s.craneMin}>
						<b className={s.craneMin}>№{reg3}</b>
					</div>
				)}
				{reg4 && (
					<div
						data-crane={craneNum4}
						className={`${s.craneMin} ${s.craneMin4}`}
					>
						<b className={s.craneMin}>№{reg4}</b>
					</div>
				)}
			</div>
		)}
	
}

