import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Mashine from './Components/machine/Mashine'
import s from '../src/css/conv.module.css'
import BackPage from './Components/BackPage/BackPage'
import Accordion from './Components/Accordeon/Accordeon'

export default function Conveyor() {
	const btnRef = useRef()

	const [info, setInfo] = useState('22')
	const loc_State = useLocation()
	const navigate = useNavigate()
	const goBack = () => {
		setTimeout(() => {
			navigate(-1)
		}, 300)
		btnRef.current.classList.add(s.animate)
	}
	useEffect(() => {
		if (loc_State.state) {
			setInfo(<Mashine mashine={{ machine: loc_State.state }} />)
		} else {
			setInfo('no')
		}
	}, [loc_State.state])

	return (
		<>
			<div className={s.wraper}>
				<div className={s.wrapBtn}>
					<BackPage />
				</div>
				<div>{info}</div>

				<div>
					<Accordion {...conv} />
				</div>
			</div>
		</>
	)
}

let conv = {
	name: 'Двигатель конвеера',
	p: '7,5kv',
	bearing: '62309 2Rs',
}
