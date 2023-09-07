import React from 'react'
import s from './cranesCss/cranes.module.css'
export default function Cranes() {
  return (
<div className={s.container}>
    <div className={s.wrapper}>
    <div className={[s.newEstakada,s.item].join(' ')}>
      <div className={s.abs}><div>Малярка</div></div>
      <div className={[s.mal,s.mal1].join(' ')} ><span>Кран <b>2</b></span>
       </div>
<div className={[s.mal,s.mal2].join(' ')} ><span>Кран <b>1</b></span>
{/* <img src="https://www.svgrepo.com/show/242143/hook-crane.svg" alt="" /> */}
  </div>
  </div>

        <div className={[s.district6,s.item].join(' ')}>
        <div className={s.abs}><div>6-й Пролет</div></div>
          
        <div  className={[s.cran1,s.mal].join(' ')}> Кран<b>№3</b> </div>
  <div className={[s.cran2,s.mal].join(' ')}>Кран<b>№2</b> </div>
  <div className={[s.cran3,s.mal].join(' ')}>Кран<b>№1</b> </div>

        </div>
        <div className={[s.district7,s.item].join(' ')}>
        <div className={s.abs}><div>7-й Пролет</div></div>

        <div className={[s.cran2,s.mal].join(' ')}>Кран<b>№2</b> </div>
  <div className={[s.cran3,s.mal].join(' ')}>Кран<b>№1</b> </div>
        </div>
        
        </div>





</div>  )
}
