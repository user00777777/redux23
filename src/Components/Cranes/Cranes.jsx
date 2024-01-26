import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { craneS } from '../../sliceReduce/cranesReduser'
// import ShowCrane from './ShowCranes/ShowCrane'
import s from './cranesCss/cranes.module.css'
import ShowCrane from './ShowCranes/ShowCrane'

const Cranes = () => {
	const [crane, setSelectedCrane] = useState(null)
	const dispatch = useDispatch()
	const craneData = useSelector(state => state.cranes.list)
	const refParent = useRef(null)

	useEffect(() => {
		const parent = refParent.current

		const handleClick = e => {
			const data = e.target.dataset.crane
			const selected = craneData.find(crane => crane.name === data)

			if (selected) {
				setSelectedCrane(selected)
				dispatch(craneS(data))
			}
		}

		parent.addEventListener('click', handleClick)

		return () => {
			parent.removeEventListener('click', handleClick)
		}
	}, [craneData, dispatch])
	if (crane) {
		return <ShowCrane crane={crane} />
	} else {
		return (
			<div ref={refParent} className={s.container}>
				<div className={s.wrapper}>
					<div className={[s.newEstakada, s.item].join(' ')}>
						<div className={s.abs}>
							<div>Малярка</div>
						</div>
						<div className={[s.mal, s.mal1].join(' ')}>
							<span data-crane='mal1'>
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

            <span data-crane='1_7'>
							Кран <b>№1</b>{' '}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Cranes
