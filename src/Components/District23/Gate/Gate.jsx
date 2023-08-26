import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './cssGate/gate.module.css' 
import Gates9 from './Gates9';
export default function Gate() {
let state = useSelector((state)=>state)
let main=useRef()
let gate=state.gates

const{g9,g10,g11,g12,g13}=gate



  






return (
    <div data-t='55' ref={main} className={s.mainGates}>

  
<ul className={s.container}>
  <li className={[s.gate,s.gate1].join(" ")}> Ворота<span> #9</span> </li>
  <li className={[s.gate,s.gate2].join(" ")}>Ворота <span>#10</span></li>
  <li className={[s.gate,s.gate3].join(" ")}>Ворота <span>#11</span></li>
  <li className={[s.gate,s.gate4].join(" ")}>Ворота <span>#12</span></li>
  <li className={[s.gate,s.gate5].join(" ")}>Ворота <span>#13</span></li>
</ul>
<div className={s.district6}>  <span>  6-й пролет  </span></div>
<div className={s.middle}>

<div className={s.door}></div>
<div className={s.door}></div>
<div className={s.door}></div>
<div className={s.door}></div>
<div className={[s.door,s.doorNot].join(" ")}> <div>ворота <span>6-7</span></div> </div>


</div>

<div className={s.preend}><div className={s.seven}>7 пролет </div></div>

<div className={s.wrapper67}>
<div className={[s.gate,s.gate7].join(" ")}>ворота <span>7</span> пролет</div>

</div>





    </div>
  )
}
