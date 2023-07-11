import React, { useState } from 'react';
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";


import s from '../../css/mashineCss/mashine.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import Radialka from './Radialka';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mashineGet } from '../../sliceReduce/machineReduser';

const MachineTools = (props) => {
let fatherRef=useRef(null);
console.log(props);

let dispatch=useDispatch()
    let stateMashine=useSelector((state)=>state.mashine.data)
const father = (event) => {
  let el = event.target;
  console.log(el.textContent);
  if (el.textContent) {
    
    // dispatch( mashineGet({text:el.textContent,src:}))
  }



  // if (el.classList.contains(s.div9)) {
  //   el.classList.remove(s.div9);
  //   el.classList.add(s.radialka);
  // } else {
  //   console.log('no');
  // }
};

useEffect(() => {
  if (fatherRef.current) {
    fatherRef.current.addEventListener('click', father);
  }

  return () => {
    if (fatherRef.current) {
      fatherRef.current.removeEventListener('click', father);
    }
  };
}, [fatherRef]); // Добавляем fatherRef в массив зависимостей


console.log(stateMashine);


  return (
    <div className={s.parent }ref={fatherRef}>
      <div className={[s.div1].join('')}>Майстерня</div>
      <div className={[s.div2].join('')}>Туалет</div>
      <div className={[s.div3].join('')}>Кладова</div>
      <div className={[s.div4].join(' ')}>ГСM</div>
      <div className={[s.div5].join(' ')}> <div >Дорога в никуда</div></div>
      <div className={[s.div6,s.radialka].join(' ')}><Link to='/radialka'>2А554</Link><span>№52035</span> </div>
      {/* <div className={[s.div7].join('')}>11</div> */}
      {/* <div className={[s.div8].join('')}>1</div> */}
      <div className={[s.div9,s.radialka].join(' ')}>2А554   <span>№5268</span></div>
      <div className={[s.div10,s.sm2126].join(' ')}>СМ2126 <span>№52050</span></div>
      <div className={[s.div11,s.sb833].join(' ')}>СБ833<span>№52056</span></div>
      <div className={[s.div12,s.sb972].join(' ')}>СБ972<span>№52910</span></div>
      <div className={[s.div13,s.sm2126].join(' ')}>СМ2126<span>№52049</span></div>
      <div className={[s.div14,s.sb833].join(' ')}>СБ833<span>№52055</span></div>
      <div className={[s.div15,s.sb972].join(' ')}>СБ972<span>№52911</span></div>
      <div className={[s.div16,s.klepka].join(' ')}>Клепка<span>№52131</span></div>
      <div className={[s.div17,s.klepka].join(' ')}>Клепка<span>№52155</span></div>
      <div className={[s.div18,s.radialka].join(' ')}>2А554<span>№51773</span></div>
      <div className={[s.div19,s.radialka].join(' ')}>2Н55<span>№1705</span></div>
      <div className={[s.div20,s.klepka].join(' ')}>Клепка<span>№51791</span></div>
      <div className={[s.div21,s.klepka].join(' ')}>Клепка<span>№51814</span></div>
      <div className={[s.div22,s.t].join(' ')}>Телега --- <span>  №051973</span>---</div>
      <div className={[s.div23].join('')}>ШУ<span>телеги</span></div>
      <div className={[s.div24,s.sb972].join(' ')}>Am19176<span>№52333</span></div>
      <div className={[s.div25,s.sb833].join(' ')}>СБ898<span>№052331</span></div>
      <div className={[s.div26,s.sm2126 ].join(' ')}>СБ973<span>№52913</span></div>
      {/* <div className={[s.div27].join('')}><span></span></div> */}
      <div className={[s.div28,s.klepka].join(' ')}>клепка<span>№51791</span></div>
      {/* <div className={[s.div30].join('')}>empty<span></span></div> */}

      <div className={[s.div31,s.klepka].join(' ')}>клепка<span>№051814</span></div>
      <div className={[s.div32,s.radialka].join(' ')}>2А554<span>№51824</span></div>
      <div className={[s.div33].join('')}>Ящики<span>рабочих</span></div>
      <div className={[s.div34].join('')}>К28 86<span>№51778</span></div>
      <div className={[s.div35].join('')}>Намотка <span>проволки</span></div>
      <div className={[s.div36].join('')}>Стенд<span></span></div>
      <div className={[s.div37].join('')}>телега---<span>№051975</span>---</div>
      <div className={[s.div38,s.weld].join( ' ')}>ВС-300<span></span></div>
      {/* <div className={[s.div39].join('')}>4<span></span></div> */}
      <div className={[s.div40].join('')}>Шу <span>телеги</span></div>
      {/* <div className={[s.div41].join('')}>1<span></span></div> */}
      <div className={[s.div42,s.weld].join(' ')}>ВДМ<span></span></div>
      <div className={[s.div43].join('')}>СБ890<span>№52944</span></div>
      {/* <div className={[s.div44].join('')}>1<span></span></div> */}
      <div className={[s.div45].join('')}>М30 48<span>№51836</span></div>
      <div className={[s.div46].join('')}>М30 48<span>№51748</span></div>
      <div className={[s.div47,s.klepka].join(' ')}>клепка<span>№51819</span></div>
      <div className={[s.div48,s.radialka].join(' ')}>2А554<span>№51819</span></div>
      <div className={[s.div49,s.sb832].join(' ')}>СБ832<span>№52052</span></div>
      {/* <div className={[s.div50].join('')}>1<span></span></div> */}
      <div className={[s.div51].join('')}>телега<span>№052087</span></div>
      {/* <div className={[s.div52].join('')}>3<span></span></div> */}
      <div className={[s.div53,s.klepka].join(' ')}>клепка<span>№51109</span></div>
      <div className={[s.div54,s.radialka].join(' ')}>2Н55<span>№2653</span></div>
      <div className={[s.div55,s.sb832].join(' ')}>СБ832<span>№052051</span></div>
      <div className={[s.div56].join('')}>Дорога<span></span></div>
      <div className={[s.div57,s.radialka].join(' ')}>2Н55<span>№11917</span></div>
      {/* <div className={[s.div58].join('')}>3<span></span></div> */}
      <div className={[s.div59].join('')}>ФП27П<span>№52232</span></div>
      {/* <div className={[s.div60].join('')}>1<span></span></div> */}
      {/* <div className={[s.div61].join('')}>1<span></span></div> */}
      {/* <div className={[s.div62].join('')}>1<span></span></div> */}
      <div className={[s.div63].join('')}>СМ2414<span>№52800</span></div>
      {/* <div className={[s.div64].join('')}>1<span></span></div> */}
      {/* <div className={[s.div65].join('')}>1<span></span></div> */}
      {/* <div className={[s.div66].join('')}>2<span></span></div> */}
      <div className={[s.div67].join('')}>2Н135<span>№51776</span></div>
      <div className={[s.div68].join('')}>2С 132<span>51772</span></div>
      {/* <div className={[s.div69].join('')}>5<span></span></div> */}
      <div className={[s.div70].join('')}>K0501<span>№52150</span></div>
      <div className={[s.div71].join('')}>Телега<span>№51656</span></div>
      <div className={[s.div72].join('')}>K0501<span>№51855</span></div>
      {/* <div className={[s.div73].join('')}>9<span></span></div> */}
      {/* <div className={[s.div74].join('')}>10<span></span></div>
      <div className={[s.div75].join('')}>11<span></span></div>
      <div className={[s.div76].join('')}>12<span></span></div>
      <div className={[s.div77].join('')}>13<span></span></div>
      <div className={[s.div78].join('')}><span></span></div>
      <div className={[s.div79].join('')}><span></span></div>
      <div className={[s.div80].join('')}><span></span></div>
      <div className={[s.div81].join('')}><span></span></div>
      <div className={[s.div82].join('')}><span></span></div>
      <div className={[s.div83].join('')}><span></span></div>
      <div className={[s.div84].join('')}><span></span></div>
      <div className={[s.div85].join('')}><span></span></div> */}

    </div>
  );
};

export default MachineTools;

