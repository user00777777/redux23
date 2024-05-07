import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Mashine from './Components/machine/Mashine'

export default function Conveyor() {
	const [info, setInfo] = useState('22')
const loc_State=useLocation()
	const navigate = useNavigate()
	const goBack = () => {
		navigate(-1)
	}
let res=1+1==2
useEffect(()=>{
	if (loc_State.state=='vent') {
		setInfo(<Mashine mashine={{machine:loc_State.state}} />)
	} else {
		setInfo('no')
	}

} ,[loc_State.state] )


	return (
		<>
			<div>
				{' '}
	<div onClick={goBack}>Назд</div>
			</div>

			<span>{info}</span>
		</>
	)
}
