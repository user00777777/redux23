
 

  
  
import React from 'react'
import getDuty from './_dutyWorkers'
import s from './duty.module.css';

  function Duty(props) {

  
  



	return (
		<>
			{props &&<div className={s.dutyContainer}>{getDuty(...props.duty)}</div>
	
        
        }
		</>
	)
}
export default Duty
