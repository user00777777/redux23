import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import CircuitGate from '../CircuitGate';
import s from './cssGate/oneGate.module.css';


export default function Info({my}) {
let wrRef= useRef()


  // if (my.gate==9) {
  //   wrRef.current?.classList.add(s.blinck)
  //   console.log(9);
    
  // }

  
    return (
<div className={s.con}>
<ul ref={wrRef} className={s.wrap}>
<li className={[s.item,s.item1,s.blinck]}>Ворота ---   <b>№{my?.gate}</b></li>
<li className={[s.item,s.item2]}>Запитано от<b> {my.rp}</b></li>
<li className={[s.item,s.item3]}>Автомат <b>№{my.avt}</b></li>
<li className={[s.item,s.item4]}>Двигатель: <b>{my.engine} kw</b></li>
<li className={[s.item,s.item5]}> <Link to='/circuitGate'>Схема</Link></li>

</ul>

</div>  
  )
}
