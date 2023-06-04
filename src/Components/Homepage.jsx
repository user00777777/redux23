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
// console.log(event.target.closest('[data-cell]'). getAttribute(['data-cell']));

  let dataSet=event.target.dataset.cell
if (dataSet) {
  
    dispatch(nCell(dataSet))
}
else{
 if (event.target.closest('[data-cell]')) {
  let dataSet2=event.target.closest('[data-cell]'). getAttribute(['data-cell'])
  dispatch(nCell(dataSet2))


}
}
  

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

<div className={[s.div1,s.vmt1,s.r ,'o'].join(' ')} data-cell='vnt1'>Внт1 </div>
<div className={[s.div2,s.t1,s.r].join(' ')} data-cell='vnt2'> <h5>ВНТ2</h5> </div>
<div className={[s.div3,s.r].join(' ')} data-cell='t1'>T1 </div>
<div className={[s.div4,s.elCount,s.r,].join(' ')} data-cell='t2'>Т2 </div>
<div className={[s.div5,s.elCell,s.r,s.connection].join(' ')}>вв </div>
<div className={[s.div6,s.elCell,s.r,'o',s.connection].join(' ')}   title={'k'} > вв</div>
<div className={[s.div7,s.avm1,s.r,].join(' ')  }ref={refA} data-cell='avm1' > Авм <span>#1</span></div>
<div className={[s.div8,s.elCell,s.r,s.avm2].join(' ')} data-cell='avm2'> Авм#2</div>
<div className={[s.div9,s.elCell,s.r].join(' ')} data-cell='13'> №13</div>
<div className={[s.div10,s.elCell,s.r].join(' ')} data-cell='14'>№14 </div>
<div className={[s.div11,s.vmt2,s.r].join(' ')} data-cell='2' >№2  </div>
<div className={[s.div12,s.t2,s.r].join(' ')} data-cell='3'> <h5> №3</h5></div>
<div className={[s.div13,s.r,s.con].join(' ')} data-cell='count1'>Счетчик </div>
<div className={[s.div14,s.elCount,s.r,s.con].join(' ')} data-cell='count2'> <h5>Счетчик</h5></div>
<div className={[s.div15,s.elCell,s.r].join(' ')} data-cell='13'>яч #13 </div>
<div className={[s.div16,s.elCell,s.r].join(' ')} data-cell='5'> №5</div>
<div className={[s.div17,s.r].join(' ') }ref={refA2} data-cell='avm2'> №6 </div>
<div className={[s.div18,s.elCell,s.r].join(' ')} data-cell='10'>№10 </div>
<div className={[s.div19,s.elCell,s.r].join(' ')} data-cell='11'> №11</div>
<div className={[s.div20,s.elCell,s.r].join(' ')} data-cell='12'> №12</div>
<div className={[s.div21,s.elSec,s.r].join(' ')} data-cell='7'> №7</div>
<div className={[s.div22,s.elCell,s.r].join(' ')} data-cell='section'> Секц-к</div>
<div className={[s.div23,s.elCell,s.r].join(' ')} data-cell='9'>№9 </div>
<div className={[s.div24,s.elCell,s.r].join(' ')}data-cell='8'>№8  </div>
<div className={[s.div25,s.emptyCell,s.r].join(' ')} data-cell='empty'>яч-- </div>
<div className={[s.div26,s.thinks,s.r].join(' ')} data-cell=''> безпека</div>
<div className={[s.div27,s.fireShield,s.r].join(' ')} data-cell='door7Right'>дверь </div>
<div className={[s.div28,s.door,s.r].join(' ')} data-cell='door7left'> дверь </div>
<div className={[s.div29,s.door,s.r].join(' ')} data-cell=''> песок </div>
<div className={[s.div30,s.door,s.r].join(' ')} data-cell='enter6'>вход </div>
<div className={[s.div31,s.abs].join(' ')}  data-cell='log'><div ref={refAbs} ><Log/></div></div>

 {/* <div className={[s.div32 ,s.log].join(' ')} ref={refLog} >ergerg </div> */}
    <div className={s.buPearent}>
      

    {/* <button  className={s.but} onClick={btn} > Tp1</button>
    <button className={s.but2} onClick={btn2} > Tp2</button> */}
    </div>
    
    
     </div>

  );
}






// const handleSpanClick = (event) => {
//   const span = event.target;
//   const parentDiv = span.closest('[data-cell]'); // Поиск ближайшего родительского элемента с атрибутом data-cell

//   if (parentDiv) {
//     const cell = parentDiv.getAttribute('data-cell'); // Получение значения атрибута data-cell

//     // Дальнейшие действия в зависимости от значения атрибута data-cell
//     if (cell === 'нужное значение') {
//       // Ваш код
//     }
//   }
// };

// return (
//   <div className={[s.div7, s.avm1, s.r].join(' ')} ref={refA} data-cell="avm1">
//     Авм <span onClick={handleSpanClick}>#1</span>
//   </div>
// );
