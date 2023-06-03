import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../css/homeComponent/home.module.css'
import { nCell } from '../sliceReduce/substationReducer';
import { setData } from '../sliceReduce/tableSlice';
import Log from './sbbstationComponents/Log';

export  default function Homepage() {
 const papaRef=useRef()
 const refA=useRef()
 const refA2=useRef()
 const refAbs=useRef()
 const refLog=useRef()
 let[data,stData]=useState()
 let dispatch=useDispatch()
 let selector=useSelector((state)=>state.tp32)
//  let [cell]=useSelector((state)=>state.tp32.list)

// console.log(description);



 function tp(event) {

  let dataSet=event.target.dataset.cell
  dispatch(nCell(dataSet))
 }



 useEffect(() => {
  if ( papaRef.current) {
    papaRef.current.addEventListener('click',tp)
   } 
   return () => {
  

if ( papaRef.current) {
  papaRef.current.removeEventListener('click',tp)
  
}

   }
 }, [papaRef.current])
 

  return (
<div className={[s.parent ,'o'].join(' ')}  ref={papaRef} >

<div className={[s.div1,s.vmt1,s.r ,'o'].join(' ')}>Внт1 </div>
<div className={[s.div2,s.t1,s.r].join(' ')}> <h5>ВНТ2</h5> </div>
<div className={[s.div3,s.r].join(' ')}>T1 </div>
<div className={[s.div4,s.elCount,s.r,].join(' ')}>Т2 </div>
<div className={[s.div5,s.elCell,s.r,s.connection].join(' ')}>вв </div>
<div className={[s.div6,s.elCell,s.r,'o',s.connection].join(' ')}   title={'k'} > вв</div>
<div className={[s.div7,s.avm1,s.r,].join(' ')  }ref={refA} data-cell='avm1' > Авм <span>#1</span></div>
<div className={[s.div8,s.elCell,s.r,s.avm2].join(' ')}> Авм#2</div>
<div className={[s.div9,s.elCell,s.r].join(' ')}> №13</div>
<div className={[s.div10,s.elCell,s.r].join(' ')}>№14 </div>
<div className={[s.div11,s.vmt2,s.r].join(' ')} data-cell='2' >№2  </div>
<div className={[s.div12,s.t2,s.r].join(' ')}> <h5> №3</h5></div>
<div className={[s.div13,s.r,s.con].join(' ')}>Счетчик </div>
<div className={[s.div14,s.elCount,s.r,s.con].join(' ')}> <h5>Счетчик</h5></div>
<div className={[s.div15,s.elCell,s.r].join(' ')}>яч #13 </div>
<div className={[s.div16,s.elCell,s.r].join(' ')}> №5</div>
<div className={[s.div17,s.r].join(' ') }ref={refA2} data-cell='avm2'> №6 </div>
<div className={[s.div18,s.elCell,s.r].join(' ')}>№12 </div>
<div className={[s.div19,s.elCell,s.r].join(' ')}> №11</div>
<div className={[s.div20,s.elCell,s.r].join(' ')}> №12</div>
<div className={[s.div21,s.elSec,s.r].join(' ')}> №7</div>
<div className={[s.div22,s.elCell,s.r].join(' ')}> Секц-к</div>
<div className={[s.div23,s.elCell,s.r].join(' ')}>№9 </div>
<div className={[s.div24,s.elCell,s.r].join(' ')}>№8  </div>
<div className={[s.div25,s.emptyCell,s.r].join(' ')}>яч-- </div>
<div className={[s.div26,s.thinks,s.r].join(' ')}> безпека</div>
<div className={[s.div27,s.fireShield,s.r].join(' ')}>дверь </div>
<div className={[s.div28,s.door,s.r].join(' ')}> дверь </div>
<div className={[s.div29,s.door,s.r].join(' ')}> песок </div>
<div className={[s.div30,s.door,s.r].join(' ')}>вход </div>
<div className={[s.div31,s.abs].join(' ')}  ><div ref={refAbs} ><Log/></div></div>

 <div className={[s.div32 ,s.log].join(' ')} ref={refLog} >ergerg </div>
    <div className={s.buPearent}>
      

    {/* <button  className={s.but} onClick={btn} > Tp1</button>
    <button className={s.but2} onClick={btn2} > Tp2</button> */}
    </div>
    
    
     </div>

  );
}






