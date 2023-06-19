import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../css/homeComponent/home.module.css'
import { nCell } from '../sliceReduce/substationReducer';
import { setData } from '../sliceReduce/tableSlice';
import Log from './sbbstationComponents/Log';
import TpLog from './sbbstationComponents/TpLog';

export  default function Homepage() {
  const [isDoubleTap, setIsDoubleTap] = useState(false);
  const doubleTapTimer = useRef(null);
 const papaRef=useRef()
 const refA=useRef()
 const refA2=useRef()
 const refAbs=useRef()
 const refT=useRef()
 let[key,setKey]=useState(localStorage.getItem('key'))
 let[blink,setBlink]=useState(localStorage.getItem('blink'))
 let dispatch=useDispatch()
 let selector=useSelector((state)=>state.tp32)


 function tp(event) {
// console.log(event.target.closest('[data-cell]'). getAttribute(['data-cell']));
  let dataSet=event.target.dataset.cell;

  
if (dataSet) dispatch(nCell(dataSet))


else {
 if (event.target.closest('[data-cell]')) {
  let dataSet2=event.target.closest('[data-cell]'). getAttribute(['data-cell'])
  console.log(dataSet2);
  
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

function setT1() {
  localStorage.setItem('blink','false')
  refA2.current?.classList.remove(s.blink);
localStorage.setItem('key','T1')
let res=localStorage.getItem('key')
setKey(res)


}

console.log(key);


function setT2() {
  let blink=localStorage.getItem('blink')
  refA.current?.classList.remove(s.blink);
localStorage.setItem('blink','false')
localStorage.setItem('key','T2')

 let res=localStorage.getItem('key')
console.log(res);
setKey(res)

;}


refA.current



useEffect(()=>{ 
 let newKey=localStorage.getItem('key');
console.log(newKey);

  if (newKey==='T1'  ) {
    // console.log('ok>T1');
    if ( refA.current) {
      
    // console.log('ref');
    
   refA.current?.classList.remove(s.avm1);
   refA.current?.classList.add(s.avmBlinc);
   refA2.current?.classList.remove(s.avmBlinc);
   refA2.current?.classList.add(s.avm2);
  }
   
 
   
   } 
   if (newKey === 'T2') {
    console.log('ok>T2');
    if (refA2.current) {
      refA2.current?.classList.remove(s.avm2);
      refA.current?.classList.remove(s.avmBlinc);
      refA2.current?.classList.add(s.avmBlinc);
      refA.current?.classList.add(s.avm1);

    
    }
  }},[key])
 
 //doubleTouch
 useEffect(()=>{
let blink=localStorage.getItem('blink')
if (blink=='true'&&refA2.current&& refA.current) {
  console.log('iam hear');
  refA2.current?.classList.remove(s.avm2);
    refA.current?.classList.remove(s.avm1);
    refA2.current?.classList.add(s.avmBlinc);
    refA.current?.classList.add(s.avmBlinc);
}
else{console.log('not hear');
}

 },[blink])
  const handleTouchStart = () => {
    if (doubleTapTimer.current) {
      console.log('doubleTapTimer.current');
      
      clearTimeout(doubleTapTimer.current);
      setIsDoubleTap(true);
    } else {
      console.log('no');
      
      doubleTapTimer.current = setTimeout(() => {
        console.log('time');
        localStorage.setItem('blink', 'false');
        setIsDoubleTap(false);
        doubleTapTimer.current = null;
      }, 300); // Интервал между двойными касаниями в миллисекундах
    }
  };
  const handleTouchEnd = () => {
    if (isDoubleTap) {
      localStorage.setItem('blink', 'true');
      console.log('Двойной клик');
   let blink=localStorage.getItem('blink')
    
   // Ваш код, который будет выполнен при двойном касании
    } else {
      localStorage.setItem('blink', 'false');
    }
  };
  

  
function  avmClick(){
let blink=localStorage.getItem('blink')
  if(blink=='true'&&refA2.current&& refA.current)
  refA2.current?.classList.add(s.avmBlinc);
  refA.current?.classList.add(s.avmBlinc);


}
 
  return (
<div className={[s.parent ,'o'].join(' ')}  ref={papaRef} >

<div className={[s.div1,s.vmt1,s.r ,'o'].join(' ')} data-cell='vnt1'>Внт1 </div>
<div className={[s.div2,s.t1,s.r].join(' ')} data-cell='vnt2'> <h5>ВНТ2</h5> </div>
<div className={[s.div3,s.r].join(' ')} data-cel='t1'>T1 </div>
<div className={[s.div4,s.elCount,s.r,].join(' ')} data-cel='t2'>Т2 </div>
<div className={[s.div5,s.elCell,s.r,s.connection,s.thinks].join(' ')}onClick={setT1} >Set1 </div>
<div className={[s.div6,s.elCell,s.r,'o',s.connection,s.thinks].join(' ')}    onClick={setT2}> Set2</div>
<div className={[s.div7,s.avm1,s.r,].join(' ')  }ref={refA} data-cell='avm1'  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onClick={avmClick} >  <span>Авм#1</span></div>
<div className={[s.div8,s.elCell,s.r,s.avm2].join(' ') } ref={refA2}  data-cell='avm2' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} id='avm2'><span> Авм#2</span></div>
<div className={[s.div9,s.elCell,s.r].join(' ')} data-cell='13'>13</div>
<div className={[s.div10,s.elCell,s.r].join(' ')} data-cell='14'>14 </div>
<div className={[s.div11,s.vmt2,s.r].join(' ')} data-cell='2' >2  </div>
<div className={[s.div12,s.t2,s.r].join(' ')} data-cell='3'> <h5> 3</h5></div>
<div className={[s.div13,s.r,s.con].join(' ')} data-cel='count1'><h5>Счетчик</h5> </div>
<div className={[s.div14,s.elCount,s.r,s.con].join(' ')} data-cel='count2'> <h5>Счетчик</h5></div>
<div className={[s.div15,s.elCell,s.r].join(' ')} data-cell='13'>13 </div>
<div className={[s.div16,s.elCell,s.r].join(' ')} data-cell='5'> 5</div>
<div className={[s.div17,s.r].join(' ') }> 6 </div>
<div className={[s.div18,s.elCell,s.r].join(' ')} data-cell='10'>10 </div>
<div className={[s.div19,s.elCell,s.r].join(' ')} data-cell='11'> 11</div>
<div className={[s.div20,s.elCell,s.r].join(' ')} data-cell='12'>12</div>
<div className={[s.div21,s.elSec,s.r].join(' ')} data-cell='7'> 7</div>
<div className={[s.div22,s.elCell,s.r].join(' ')} data-cell='section'> Секц-к</div>
<div className={[s.div23,s.elCell,s.r].join(' ')} data-cell='9'>9 </div>
<div className={[s.div24,s.elCell,s.r].join(' ')}data-cell='8'>8  </div>
<div className={[s.div25,s.emptyCell,s.r,s.thinks].join(' ')} data-cel='empty'>--------- </div>
<div className={[s.div26,s.thinks,s.r].join(' ')} data-cel=''> безпека</div>
<div className={[s.div27,s.fireShield,s.r].join(' ')} data-cel='door7Right'>дверь </div>
<div className={[s.div28,s.door,s.r].join(' ')} data-cel='door7left'> дверь </div>
<div className={[s.div29,s.door,s.r].join(' ')} data-cel=''> песок </div>
<div className={[s.div30,s.door,s.r].join(' ')} data-cel='enter6'>вход </div>
<div className={[s.div31].join(' ') }ref={refAbs}  data-cel='log'> <Log /></div>

 <div className={[s.div32 ].join(' ')} ref={refT} ><TpLog k={key} /> </div>
    <div className={s.buPearent}>
      

    {/* <button  className={s.but} onClick={btn} > Tp1</button>
    <button className={s.but2} onClick={btn2} > Tp2</button> */}
    </div>
    
    
     </div>

  );
}




// import React, { useState, useEffect } from 'react';

// const HoldButton = () => {
//   const [isHolding, setIsHolding] = useState(false);

//   const handleMouseDown = () => {
//     setIsHolding(true);
//     // Дополнительный код, который будет выполнен при удерживании кнопки
//   };

//   const handleMouseUp = () => {
//     setIsHolding(false);
//   };

//   useEffect(() => {
//     if (isHolding) {
//       // Ваш код, который будет выполнен при удерживании кнопки
//     }
//   }, [isHolding]);

//   return (
//     <button
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onTouchStart={handleMouseDown}
//       onTouchEnd={handleMouseUp}
//     >
//       {isHolding ? 'Удерживается...' : 'Кнопка'}
//     </button>
//   );
// };

// export default HoldButton;

