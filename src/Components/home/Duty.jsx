import React from 'react'
import getDuty from './_dutyWorkers'
import s from './duty.module.css'

function Duty({duty}) {
	// console.log(duty);
	

  
	return (
		<><div className={s.wrapHeader}><h2>Дежурные на февраль</h2></div>
			{duty && <div className={s.dutyContainer}>{getDuty(...duty)}</div>}
   
		</>
	)
}
export default Duty
