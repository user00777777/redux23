import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Log(props) {
  const date = useSelector((state) => state.tp32.list);
  const [description, setDescription] = useState([]);

console.log(date);



  
  
  
  return (
    <div>
 {date.map((el, index) => (
  <div key={el.id || index}>
    <div>{el.type}</div>
    <div>{el.iNom}</div>
    <div>{el.other}</div>
   
    {el.p && <div> <span>Подкл.мощ </span>{el.p}Квт </div>}
    {el.path && <div>Подключены <p><span>{el.path}</span> </p></div>}
  </div>
))}
    </div>
  );
  
}





