import React from 'react'
import s from './cssGate/gate.module.css' 
export default function Gate() {


  return (
    <div className={s.mainGates}>
<div className={s.wrap_left}>
    <div className={[s.leftgate1,s.gateItem].join(' ')}><span>14</span></div>
    <div className={[s.leftgate2,s.gateItem].join(' ')}><span>10</span></div>
    <div className={[s.leftgate3,s.gateItem].join(' ')}><span>11</span></div>
    <div className={[s.leftgate4,s.gateItem].join(' ')}><span>12</span></div>
    <div className={[s.leftgate5,s.gateItem].join(' ')}><span>13</span></div>
    <div className={[s.leftgate6,s.gateItem].join(' ')}></div>
  
</div>
<div className={s.insideContainer}>
<div className={s.middle}>Вьезд с улицы</div>
<div className={s.middle}>Телега эстакада</div>
<div className={s.middle}>Телега сдача</div>
<div className={s.smallMal}>
  <div className={s.slMal}>Телега-яма</div>
  
</div>
<div className={s.middle}>Дорога</div>
<div className={s.tel7}><div className={s.middl}>Телега 7-пролет</div></div>

</div>

<div className={s.wrap_right}>
<div className={[s.rightgate1,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate2,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate3,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate4,s.gateItem_right].join(' ')}></div>
    <div className={[s.rightgate5,s.gateItem_right].join(' ')}><span>проезд</span></div>
    <div className={[s.rightgate6,s.gateItem_right].join(' ')}></div>
</div>

    </div>
  )
}
