import React from 'react'
import { Link } from 'react-router-dom'
import s from './css/district23.module.css'
export default function District23() {
  return (
    <div className={s.container}>
    <ul className={s.wrapper}>
<li className={[s.gate,s.item].join(' ')}><Link to='/gate'><span>Ворота</span></Link></li>
<li className={[s.heater,s.item].join(' ')}>Обогреватели</li>
<li className={[s.documents,s.item].join(' ')}>Документы</li>
<li className={[s.cranes,s.item].join(' ')}>Краны</li>

    </ul>
    
    
    
    
    </div>
  )
}
