import React, { useEffect } from 'react'
import { useState } from 'react';
import s  from "./Plumbercss/plumber.module.css";
function plumb(one,two,three,four,hours,day) {
day-=1
console.log(day);

let oneShift=[one,two,three,four] 
let twoShift=[four,one,two,three]
  if (hours>=7&&hours<19) {
    let plumber=oneShift[day%oneShift.length]
  return plumber
}


if (hours>=19&&hours<=23) {
 let plumber2=twoShift[day%twoShift.length]

return plumber2

}
else{ 
let  plumber2=twoShift[(--day)%twoShift.length]
console.log(plumber2);

console.log(day);

return plumber2
  
}


  






}
// 


export default function PlumbersDuty() {
  const[plumber1,setPlumber]= useState('')
let date=new Date(),
 day=date.getDate(),
 hours=date.getHours(),
 minutes=date.getMinutes(),
 changeDay=day;
const oneShift=plumb('Писареенко','Бабец','Павлюченко','Немченко',1,4)
console.log(oneShift);



  

  return (
    <div className={s.container}>

<div className={s.plumbers}>
Дежурный сантехник: <h2>{oneShift}</h2>

</div>
      
    </div>
  )
}
