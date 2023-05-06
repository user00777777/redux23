import React from 'react'
import { useSelector } from 'react-redux';
import s from '../css/telega.module.css';

export default function Telega({rp,avt,hoist,info}) {
console.log(rp);
console.log(info);





  let result=avt?<div ><em>Тельф{hoist}</em> <br /> Автомат  --{avt}-- <strong  > <br />{info} </strong></div>: 
  rp?<div className={s.rp} ><mark > Тельфер{hoist}</mark> <br /> <b  > Рп №{rp}</b></div>:'Дорога'.split('').join('--').toUpperCase().concat('( В никуда)');  


  

  // let result=inf?inf:rp;

  
    return (
    <div className={s.tel}><b>{result}</b>
 
    
    </div>
  )
}
