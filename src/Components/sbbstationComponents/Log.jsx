import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import s from '../../css/homeComponent/log.module.css';
import home from '../../css/homeComponent/home.module.css';

export default function Log({ k }) {
  let refL = useRef();
  const date = useSelector((state) => state.tp32.list);
  const [description, setDescription] = useState([]);
  const[almost,setAlmost]= useState()


  let ref = refL.current;

  useEffect(() => {
    if (ref && ref.textContent) {
      console.log(ref.textContent);
      // ref.style.paddingRight = '0.1rem';
      // ref.style.paddingLeft = '1rem';
   }   
    if ( !ref?.textContent) {
 setAlmost()
  
   }   

  }, [ref]);

let id=date.find((el)=>el.id)




 // ...

// return (
//   <>
//     <div className={s.logContainer} ref={refL}>
//       {date.map((el, index) => (
//         <div key={el.id}> {/* Add a unique key prop */}
//           <div className={s.lType}><span>{el.type}</span></div>
//           <div className={s.l2}>{el.iNom}</div>
//           <div className={s.l3}>{el.other}</div>
//           {el.p && <div className={s.l1}>Подкл.мощ <span>{el.p}</span>Квт</div>}
//           {el.path && <div className={s.l2}>Подключены <p><span>{el.path}</span></p></div>}
//         </div>
//       ))}
//     </div>
//   </>
// );

// ...


// ...

return (
  <>
    <div className={s.logContainer} ref={refL} >
      {date.map((el,index) => (
        <div key={index}> {/* Используйте el.id в качестве свойства key */}
          <div className={s.lType}><span>{el.type}</span></div>
          <div className={s.l2}>{el.iNom}</div>
          <div className={s.l3}>{el.other}</div>
          {el.p && <div className={s.l1}>Подкл.мощ <span>{el.p}</span>Квт</div>}
          {el.path && <div className={s.l2}>Подключены <p><span>{el.path}</span></p></div>}
        </div>
      ))}
    </div>
  </>
);

// ...


}
           









