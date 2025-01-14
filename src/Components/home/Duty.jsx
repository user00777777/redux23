import React from 'react'
import getDuty from './_dutyWorkers'
import s from './duty.module.css'

function Duty({duty}) {
	console.log(duty);
	

  
	return (
		<>
			{duty && <div className={s.dutyContainer}>{getDuty(...duty)}</div>}
   
		</>
	)
}
export default Duty
