import React from 'react'
import s from './cranesCss/cranes.module.css'
export default function Cranes() {
  return (
<div className={s.container}>
    <div className={s.wrapper}>
    <div className={[s.newEstakada,s.item].join(' ')}>Новая эстакада</div>

        <div className={[s.district6,s.item].join(' ')}></div>
        <div className={[s.district7,s.item].join(' ')}></div>
        
        </div>






</div>  )
}
