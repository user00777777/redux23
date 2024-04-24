import React, { useContext } from 'react'
import { Context } from '../../Components/Telega'
import { useLocation } from 'react-router-dom'
import s from './repair.module.css'
import InfoTel from './InfoTel'
export function RepairTel() {
	const location = useLocation()
	// const hoist = useContext(Context)
	const hoist = location.state
	console.log(hoist)

	return (
		<div className={s.container}>
			{' '}
			<div className={s.wrapHead}>
				<svg>
					<text x='50%' y='50%' dy='.35em' textAnchor='middle'>
					 Тельфер {hoist && hoist}
					</text>
				</svg>
			</div>
			<div className={s.infoTel}> {<InfoTel hoist={hoist} />}</div>
		</div>
	)
}

export default RepairTel
