import React from 'react'
import s from './css/district23.module.css'
export default function District23() {
  return (
    <div className={s.container}>
    <ul className={s.wrapper}>
<li className={[s.gate,s.item].join(' ')}>Ворота</li>
<li className={[s.heater,s.item].join(' ')}>Обогреватели</li>
<li className={[s.documents,s.item].join(' ')}>Документы</li>
<li className={[s.cranes,s.item].join(' ')}>Краны</li>

    </ul>
    
    
    
    
    </div>
  )
}
