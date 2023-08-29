import React from 'react'
import s from './cssGate/oneGate.module.css';
export default function Info({my}) {
  

  
    return (
<div className={s.con}>
<ul className={s.wrap}>
<li className={[s.item,s.item1]}>Ворота ---   <b>№{my?.gate}</b></li>
<li className={[s.item,s.item2]}>Запитано от<b> {my.rp}</b></li>
<li className={[s.item,s.item3]}>Автомат<b>№{my.avt}</b></li>
<li className={[s.item,s.item4]}></li>
<li className={[s.item,s.item5]}></li>

</ul>

</div>  
  )
}
