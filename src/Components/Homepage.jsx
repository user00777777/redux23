import React, { useState } from 'react';
import { useRef } from 'react';
import s from '../css/homeComponent/home.module.css'

export  default function Homepage() {
 const papaRef=useRef()
 const refA=useRef()
 const refA2=useRef()
 const refAbs=useRef()
 const refLog=useRef()
  return (
<div className={[s.parent ,'o'].join(' ')}  ref={papaRef} >

<div className={[s.div1,s.vmt1,s.r ,'o'].join(' ')}>Внт1<br/> Запитан от<br /> кп #4 яч#3 </div>
<div className={[s.div2,s.t1,s.r].join(' ')}> <h5>T1-1000kвa</h5> </div>
<div className={[s.div3,s.connection,s.r].join(' ')}> </div>
<div className={[s.div4,s.elCount,s.r,].join(' ')}>Счетчик </div>
<div className={[s.div5,s.elCell,s.r].join(' ')}>Яч # 2 </div>
<div className={[s.div6,s.elCell,s.r,'o'].join(' ')}   title={'k'} > яч#3</div>
<div className={[s.div7,s.avm1,s.r,].join(' ')  }ref={refA} data-cell='avm1' > Авм <span>#1</span></div>
<div className={[s.div8,s.elCell,s.r].join(' ')}> яч#6</div>
<div className={[s.div9,s.elCell,s.r].join(' ')}> яч#5</div>
<div className={[s.div10,s.elCell,s.r].join(' ')}>яч#4 </div>
<div className={[s.div11,s.vmt2,s.r].join(' ')}>Внт2<br/> Запитан от<br /> кп #4 яч#13  </div>
<div className={[s.div12,s.t2,s.r].join(' ')}> <h5> Т2-1000ква </h5></div>
<div className={[s.div13,s.connection,s.r,s.con2].join(' ')}>f </div>
<div className={[s.div14,s.elCount,s.r].join(' ')}> <h5>Счетчик</h5></div>
<div className={[s.div15,s.elCell,s.r].join(' ')}>яч #13 </div>
<div className={[s.div16,s.elCell,s.r].join(' ')}> яч#14</div>
<div className={[s.div17,s.avm2,s.r].join(' ') }ref={refA2} data-cell='avm2'>  </div>
<div className={[s.div18,s.elCell,s.r].join(' ')}>яч#10 </div>
<div className={[s.div19,s.elCell,s.r].join(' ')}> яч#11</div>
<div className={[s.div20,s.elCell,s.r].join(' ')}> яч#12</div>
<div className={[s.div21,s.elSec,s.r].join(' ')}> Секц-к</div>
<div className={[s.div22,s.elCell,s.r].join(' ')}> яч#7</div>
<div className={[s.div23,s.elCell,s.r].join(' ')}>яч#9 </div>
<div className={[s.div24,s.elCell,s.r].join(' ')}>яч#8  </div>
<div className={[s.div25,s.emptyCell,s.r].join(' ')}>яч-- </div>
<div className={[s.div26,s.thinks,s.r].join(' ')}> безопасность</div>
<div className={[s.div27,s.fireShield,s.r].join(' ')}>пожарный щит </div>
<div className={[s.div28,s.door,s.r].join(' ')}> дверь </div>
<div className={[s.div29,s.door,s.r].join(' ')}> дверь </div>
<div className={[s.div30,s.door,s.r].join(' ')}>вход </div>
<div className={[s.abs].join(' ')}  ><div ref={refAbs} ></div></div>

 <div className={s.log} ref={refLog} > </div>
    <div className={s.buPearent}>
      

    {/* <button  className={s.but} onClick={btn} > Tp1</button>
    <button className={s.but2} onClick={btn2} > Tp2</button> */}
    </div>
    
    
     </div>

  );
}






