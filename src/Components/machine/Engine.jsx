import React from 'react'
import s from './css/Engine/engine.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Engine(props) {
	console.log(props)

	const { cosFStr } = useParams()
	const sb833 = JSON.parse(decodeURIComponent(cosFStr))
	console.log(sb833)

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
			<ul className={s.wrapMap}>
				<li className={`${s.engineCurrent} ${s.f}`}>Номинальный Ток</li>
				<li className={`${s.power} ${s.f}`}>
					{sb833.cosF ? 'Cos_F' : 'Подшипники'}
				</li>
				<li className={`${s.rpm} ${s.f}`}>оброты</li>
				<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
				<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
				<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
				<li className={s.mainEngine_power}> {sb833.power}</li>
				{sb833.cosF ? (
					<li className={s.mainEngine_starterA1}> {sb833.cosF}</li>
				) : (
					<li className={s.mainEngine_starterA1}> {sb833.bearing}</li>
				)}
				<li className={s.mainEngine_rpm}> {sb833.Engine_rpm}</li>
				<li className={s.CircuitBreaker}> {sb833.weight}</li>
				<li className={s.shaftDiameter}> {sb833.shaftDiameter}</li>
				<li className={s.engineName}> {sb833.engineName}</li>{' '}
				<li className={s.electricCurrent}> {sb833.electricCurrent}</li>
			</ul>
		</div>
	)
}
// {
// 	selector.map((li, i) => {
// 		return (
// 			<ul key={i} className={s.wrapMap}>
// 				<li className={`${s.engineCurrent} ${s.f}`}>Номинальный</li>
// 				<li className={`${s.Motor_starterA1} ${s.f}`}>Мощность</li>
// 				<li className={`${s.power} ${s.f}`}>cosF</li>
// 				<li className={`${s.rpm} ${s.f}`}>оброты</li>
// 				<li className={`${s.cosF} ${s.f}`}>вес двигателя</li>
// 				<li className={`${s.shaftDiameter1} ${s.f}`}>диаметр вала</li>
// 				{/* <div className={s.second} key={i}> */}
// 				{/* <li className={s.power1}> {li.mainEngine.power}</li> */}
// 				<li className={s.mainEngine_power}> {li.mainEngine.power}</li>
// 				<li className={s.mainEngine_starterA1}> {li.mainEngine.cosF}</li>
// 				<li className={s.engineName}> {li.mainEngine.engineName}</li>
// 				<li className={s.mainEngine_rpm}> {li.mainEngine.Engine_rpm}</li>
// 				<li className={s.CircuitBreaker}> {li.mainEngine.weight}</li>
// 				<li className={s.shaftDiameter}> {li.mainEngine.shaftDiameter}</li>
// 				<li className={s.electricCurrent}> {li.mainEngine.electricCurrent}</li>
// 				{/* </div> */}
// 			</ul>
// 		)
// 	})
// }
