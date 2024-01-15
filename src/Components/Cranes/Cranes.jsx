import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import s from './cranesCss/cranes.module.css'
import ShowCrane from './ShowCrane'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'
export default function Cranes() {
 let state= useSelector((state)=>state.cranes.craneObj  )
  const dispatch=useDispatch()
	let refParent = useRef()
	const [comp, setComp] = useState(false)
	useEffect(() => {
    let parent = refParent?.current
		console.log(state)
    
		parent?.addEventListener('click', e => {
      let data = e.target.dataset.mal
      
      dispatch(craneS(data))

			if (data == 'mal2') setComp(<ShowCrane crane={state} />)
			if (data == 'mal1') setComp(<ShowCrane crane={state} />)
		})
	})

	return (
		comp || (
			<div ref={refParent} className={s.container}>
				<div className={s.wrapper}>
					<div className={[s.newEstakada, s.item].join(' ')}>
						<div className={s.abs}>
							<div>Малярка</div>
						</div>
						<div className={[s.mal, s.mal1].join(' ')}>
							<span data-mal='mal2'>
								Кран <b>2</b>
							</span>
						</div>
						<div className={[s.mal, s.mal2].join(' ')}>
							<span data-mal='mal1'>
								Кран <b>1</b>
							</span>
							{/* <img src="https://www.svgrepo.com/show/242143/hook-crane.svg" alt="" /> */}
						</div>
					</div>

					<div className={[s.district6, s.item].join(' ')}>
						<div className={s.abs}>
							<div>
								6-й <div className={s.noOne}>пролет</div>
							</div>
						</div>

						<div className={[s.cran1, s.mal].join(' ')}>
							{' '}
							Кран<b>№3</b>{' '}
						</div>
						<div className={[s.cran2, s.mal].join(' ')}>
							Кран<b>№2</b>{' '}
						</div>
						<div className={[s.cran3, s.mal].join(' ')}>
							Кран<b>№1</b>{' '}
						</div>
					</div>
					<div className={[s.district7, s.item].join(' ')}>
						<div className={s.abs}>
							<div>7-й Пролет</div>
						</div>

						<div className={[s.cran2, s.mal].join(' ')}>
							Кран<b>№2</b>{' '}
						</div>
						<div className={[s.cran3, s.mal].join(' ')}>
							Кран<b>№1</b>{' '}
						</div>
					</div>
				</div>
			</div>
		)
	)
}
// import React, { useEffect, useRef, useState } from 'react'
// import s from './cranesCss/cranes.module.css'
// import ShowCrane from './ShowCrane'
// import { craneS } from '../../sliceReduce/cranesReduser'
// import { useDispatch } from 'react-redux'
// const Crane = ({ dataMal, children }) => (
  
  
// 	<div className={`${s.mal} ${s[dataMal]}`}>
// 		<span data-mal={dataMal}>
// 			{`Кран №${dataMal.charAt(dataMal.length - 1)}`}
// 			{children}
// 		</span>
// 	</div>
// )

// const Cranes = () => {
// 	const refParent = useRef(null)
// 	const [comp, setComp] = useState(null)
// const dispatch=useDispatch()
// 	const craneData = [
// 		{ id: 'mal1', label: 'Кран 1' },
// 		{ id: 'mal2', label: 'Кран 2' },
// 		// Добавь еще краны, если необходимо
// 	]

// 	useEffect(() => {
// 		const parent = refParent.current

// 		const handleClick = e => {
// 			const data = e.target.dataset.mal
//       console.log(data);
      
// 			const selectedCrane = craneData.find(crane => crane.id === data)

// 			if (selectedCrane) setComp(<ShowCrane crane={selectedCrane} />)
// 		}

// 		parent.addEventListener('click', handleClick)

// 		return () => {
// 			parent.removeEventListener('click', handleClick)
// 		}
// 	}, [craneData])

// 	return (
// 		comp || (
// 			<div ref={refParent} className={s.container}>
// 				<div className={s.wrapper}>
// 					<div className={`${s.newEstakada} ${s.item}`}>
// 						<div className={s.abs}>
// 							<div>Малярка</div>
// 						</div>
// 						{craneData.map(crane => (
              
// 							<Crane key={crane.id} dataMal={crane.id}>
// 								{crane.label}
                
// 							</Crane>
// 						))}
// 					</div>

// 					<div className={`${s.district6} ${s.item}`}>
// 						<div className={s.abs}>
// 							<div>
// 								6-й <div className={s.noOne}>пролет</div>
// 							</div>
// 						</div>
// 						{craneData
// 							.slice(0, 3)
// 							.reverse()
// 							.map(crane => (
// 								<Crane
// 									key={crane.id}
// 									dataMal={`cran${crane.id.charAt(crane.id.length - 1)}`}
// 								>
// 									{`Кран №${crane.id.charAt(crane.id.length - 1)}`}
// 								</Crane>
// 							))}
// 					</div>

// 					<div className={`${s.district7} ${s.item}`}>
// 						<div className={s.abs}>
// 							<div>7-й Пролет</div>
// 						</div>
// 						{craneData
// 							.slice(0, 2)
// 							.reverse()
// 							.map(crane => (
// 								<Crane
// 									key={crane.id}
// 									dataMal={`cran${crane.id.charAt(crane.id.length - 1)}`}
// 								>
// 									{`Кран №${crane.id.charAt(crane.id.length - 1)}`}
// 								</Crane>
// 							))}
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	)
// }

// export default Cranes
