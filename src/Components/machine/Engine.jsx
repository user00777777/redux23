import React from 'react'
import s from './css/Engine/engine.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Engine() {
	let selector = useSelector(state => state.engine.data833)

	const navigate = useNavigate()
	let goBack = () => navigate(-1)

	return (
		<div className={s.wrapperE}>
			<div className={s.wBack}>
				<div className={s.back} onClick={goBack}>
					Назад
				</div>
			</div>{' '}
			{/* <ul className={s.allEngin}> */}
			{selector.map((li, i) => {
				return (
					<ul key={i} className={s.wrapMap}>
						<li className={`${s.reds} ${s.f}`}>Двигатель</li>
						<li className={`${s.Motor_starterA1} ${s.f}`}>пускателя</li>
						<li className={`${s.power} ${s.f}`}>мощность</li>
						<li className={`${s.rpm} ${s.f}`}>оброты</li>
						{/* <li className={s.protection}>Автомат</li> */}
						{/* <div className={s.second} key={i}> */}
						{/* <li className={s.power1}> {li.mainEngine.power}</li> */}
						<li className={s.mainEngine_power}> {li.mainEngine.power}</li>
						<li className={s.mainEngine_starterA1}>
							{' '}
							{li.mainEngine.Motor_starterA1}
						</li>
						<li className={s.engineName}> {li.mainEngine.engineName}</li>
						<li className={s.mainEngine_rpm}> {li.mainEngine.Engine_rpm}</li>
						{/* <li className={s.CircuitBreaker}>
							{' '}
							{li.mainEngine.CircuitBreaker}
						</li> */}
						{/* </div> */}
					</ul>
				)
			})}
			{/* </ul> */}
		</div>
	)
}
