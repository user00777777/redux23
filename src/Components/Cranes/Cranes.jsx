import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import s from './cranesCss/cranes.module.css'
import ShowCrane from './ShowCrane'
export default function Cranes() {
	let refParent = useRef()
	const [comp, setComp] = useState(false)
	useEffect(() => {
		let parent = refParent?.current
		console.log(parent)

		parent?.addEventListener('click', e => {
			let data = e.target.dataset.mal

			if (data == 'mal2') setComp(<ShowCrane crane={data} />)
			if (data == 'mal1') setComp(<ShowCrane crane={data} />)
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
