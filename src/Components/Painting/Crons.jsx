import React from 'react'
import fotoCron from './Crons/cronsFoto/kronn.jpg';
import s from './Crons/cron.module.css';
import cronFoto from './Crons/cronsFoto/kronn.jpg';
import Accordeon from '../Accordeon/Accordeon';
import { useSelector } from 'react-redux';


export default function Crons() {
const state=useSelector((state)=>state.paint.crons )
console.log(state);

	return <div className={s.container}><div className={s.wrapImg}>

<img src={cronFoto} alt="Крон"  />

  </div>
  { state&& state.map(el=> <div key={el.p}> <Accordeon {...el} /></div>)}
  
  </div>
}
