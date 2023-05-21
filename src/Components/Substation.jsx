import React, { useCallback, useEffect,useState } from 'react'
import { createElement } from 'react';
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from '../css/Substation.module.css'
import { destr, nCell } from '../sliceReduce/substationReducer';
import Avm2 from './sbbstationComponents/Avm2';
import Log from './sbbstationComponents/Log';

export default function Substation() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.tp32);
  const refA = useRef();
  const refA2 = useRef();
  const refAbs = useRef();
  const papaRef = useRef();
  const [x, setX] = useState(true);

  const cel = useSelector(state => state.tp32.list);
  const newcel = useSelector(state => state.tp32.newList);  
const [cell,...arDescrip]=cel.map((el)=>el.description)

useEffect(()=>{
dispatch( destr(cel))

},[cel])

const value = localStorage.getItem("key");

useEffect(() => {
  if (value=='true' ) {
    refA.current?.classList.add(s.change)
  } 
  else if (value=='false' ) {
    // console.log('true', value);
    refA2.current?.classList.add(s.change)
}
  else if (x ) {
    // console.log('true', value);
    refA.current?.classList.add(s.change)
}
}, [value,x]);

function arDestr(c) {

  
  if (c) {
    const[typ,iN,bC,oth]=c;
    const{type}=typ
    const{iNom}=iN
    const{breakCurrent}=bC
   const{other}=oth
  return  {type,
  iNom,
  breakCurrent,
  other
  }}}

let avm1=arDestr(cell)
   let out = refAbs.current;
  const tp = useCallback((event) => {
    let data = event.target.dataset.cell;
    let clas = event.target.classList
    let out = refAbs.current;
    if (out.classList.contains(s.absChild)) {
      console.log('ok');
      out.classList.toggle(s.absChild)
      
    }
    else{
      out.classList.add(s.absChild)

    }
 
  
    
dispatch(nCell(data));}, [dispatch, cell]);
 

  useEffect(() => {
 
  refAbs.current.classList.add('x')
  // if (out.classList.contains(s.x)) {
  //   console.log('yes');
    
  // }
  // console.log(out.className);




    if (cell) {
  
      if (avm1) {
           out.innerHTML += `<ul><p >${avm1.type}</p> <li>${avm1.iNom}</li><li> ${avm1.breakCurrent}</li><i >${avm1.other}</i></ul> `;
          //  if (out.classList.contains('e')) {
          //   console.log('c');
          //   out.classList.remove(s.absChild);
          // }
          // else {
          //   out.classList.add(s.absChild);
          //   console.log('else');
           

          // }
}} 
}, [cell,s.absChild]);

  useEffect(() => {
    const papaElement = papaRef.current;

    if (papaElement) {
      papaElement.addEventListener('click', tp);
    }

    return () => {
      if (papaElement) {
        papaElement.removeEventListener('click', tp);
      }
    };
  }, [tp]);


  const btn = () => {
   
  localStorage.setItem('key', 'true');
  // value==='1'? alert('workTp1'): alert('worksTp2');
 };
  const btn2 = () => {
  localStorage.setItem('key', 'false');
  // value==='1'? alert('workTp1'): alert('worksTp2');
 };








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
<div className={[s.div17,s.avm2,s.r].join(' ') }ref={refA2} data-cell='avm2'> <Avm2         /> </div>
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

 <div className={s.log} ><Log/></div>
    <div className={s.buPearent}>
      

    <button  className={s.but} onClick={btn} > Tp1</button>
    <button className={s.but2} onClick={btn2} > Tp2</button>
    </div>
    
    
     </div>




  )
}



// useEffect(() => {
//   if (value === 'false') {
//     console.log('FFFAlse', value);
//     setX(false);
//   } else if (value === 'true') {
//     console.log('TTtrue', value);
//     setX(true);
//   }
// }, [value]);

// const [x, setX] = useState(false);

// x && console.log('no');
// !x && console.log('ok');

