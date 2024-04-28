import React from 'react'
import fotoCron from './Crons/cronsFoto/kronn.jpg';
import s from './Crons/cron.module.css';
import cronFoto from './Crons/cronsFoto/kronn.jpg';


export default function Crons() {
	console.log(44)

	return <div className={s.container}><div className={s.wrapImg}>

<img src={cronFoto} alt="" srcset="" />

  </div></div>
}
