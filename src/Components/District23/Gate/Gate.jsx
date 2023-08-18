import React from 'react'
import s from './cssGate/gate.module.css' 
export default function Gate() {


  return (
    <div className={s.mainGates}>
<div className={s.wrap_left}>
    <div className={[s.leftgate1,s.gateItem].join(' ')}>1</div>
    <div className={[s.leftgate2,s.gateItem].join(' ')}>2</div>
    <div className={[s.leftgate3,s.gateItem].join(' ')}>3</div>
    <div className={[s.leftgate4,s.gateItem].join(' ')}>4</div>
    <div className={[s.leftgate5,s.gateItem].join(' ')}>5</div>
    <div className={[s.leftgate6,s.gateItem].join(' ')}></div>
  
</div>
<div className={s.insideContainer}>
<div className={s.middle}>Вьезд с улицы</div>
<div className={s.middle}>Телега эстакада</div>
<div className={s.middle}>Телега сдача-покраска</div>
<div className={s.middle}>Телега-яма</div>
<div className={s.middle}>dd</div>
<div className={s.middle}>dd</div>

</div>

<div className={s.wrap_right}>
<div className={[s.rightgate1,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate2,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate3,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate4,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate5,s.gateItem_right].join(' ')}>5</div>
    <div className={[s.rightgate6,s.gateItem_right].join(' ')}></div>
</div>

    </div>
  )
}
