import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import s from '../../css/homeComponent/log.module.css'
import home from '../../css/homeComponent/home.module.css'
export default function Log({k,r}) {
  const date = useSelector((state) => state.tp32.list);
  const [description, setDescription] = useState([]);
let el=r.current;
  
// if (!el?.textContent){   
  
// el?.classList.remove(home.abs)
// console.log('no');

  
//   }


if (el?.textContent) {
  console.log(77);
  el?.classList.add(home.abs)


}
else{el}


  
  
  
  return (
    <div>
 {date.map((el, index) => (
  <div  key={el.id || index}>
    <div className={s.lType}> <span>{el.type}</span></div>
    <div className={s.l2}>{el.iNom}</div>
    <div className={s.l3}>{el.other}</div>
   
    {el.p && <div className={s.l1}>Подкл.мощ  <span>{el.p}</span>Квт </div>}
    {el.path && <div className={s.l2}>Подключены <p><span>{el.path}</span> </p></div>}
  </div>
))}
    </div>
  );
  
}





