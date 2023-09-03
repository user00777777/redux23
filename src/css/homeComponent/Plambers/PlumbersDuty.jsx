import React, { useEffect } from 'react'
import { useState } from 'react';
import s  from "./Plumbercss/plumber.module.css";
function plamb1(p1,day) {
p1;

  return{
p1,
day


  }
}



export default function PlumbersDuty() {
  const[plumber1,setPlumber]= useState('')
let date=new Date(),
 day=date.getDate(),
 hours=date.getHours(),
 minutes=date.getMinutes(),
 changeDay=day;
// changeDay
const plumbers=[plamb1("Бабец",day),plamb1("Павлюченко",day),plamb1("Немченко",day),plamb1("Писареенко",day)]
const plumbers2=[plamb1("Писареенко",day),plamb1("Бабец",day),plamb1("Павлюченко",day),plamb1("Немченко",day)]
console.log(plumber1);
// console.log(hours);


useEffect(()=>{
  
  if (hours>=7&&hours<19) {
    let plumber2= plumbers2[(changeDay+2)%plumbers2.length]
  // console.log(plumber2.p1);
  setPlumber(plumber2.p1)
  console.log('jkhjkh');}
  if (true) {
    console.log(11);
    
    const plumber=plumbers[(changeDay-2)%plumbers.length]
    setPlumber(plumber.p1)
    // console.log(plumber.p1);
  }
  if (hours<0&&hours<7) {
    changeDay-=1;
    const plumber=plumbers[(changeDay-2)%plumbers.length]

  }
  
  

},[])

  

  return (
    <div className={s.container}>

<div className={s.plumbers}>
Дежурный сантехник: <h2>{plumber1}</h2>

</div>
      
    </div>
  )
}
