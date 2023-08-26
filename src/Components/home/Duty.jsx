import React, { useEffect, useState } from 'react'
import s from './duty.module.css';

export default function Duty() {
//     let nowDate=new Date();
//     let date=nowDate.getDate();
//     let oldDate=nowDate.getDate()
//     let hour=nowDate.getHours();
//     let minutes=nowDate.getMinutes();


//     const[newDate,setDate]=useState(date)

  

  

  

    const currentDate = new Date();
    let dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    let hour = currentDate.getHours();
    const minutes= currentDate.getMinutes();
  
class Shift{
  constructor(duty1, duty2){

    this.duty1=duty1; 
  this.duty2=duty2;}}
  


   
   
   
    let vasj= new Shift('Малько','Бондаренко');
    let stas= new Shift("Круглый","Гекало");
    let sinkevich= new Shift("Синкевичь","Дяченко");
    let paha= new Shift("Лысенко","Петриченко");
  
    const workers1 = [vasj,stas,sinkevich,paha ];
    const workers2 = [paha, vasj,stas,sinkevich] ;
   
      // const currentShift = shifts[(day ) % shifts.length];
      // console.log(currentShift);
      // dayOfMonth-=1
// dayOfMonth=19
      const currentWorker2 = workers2[(dayOfMonth ) % workers2.length];

      
// hour=8

// console.log(dayOfMonth);


if (hour>=7&&hour<19) {
  const currentWorker = workers1[(dayOfMonth ) % workers1.length];
  // console.log(currentWorker);
  
  return <div className={s.container}><div className={s.twoShift}> <h2>Електрики</h2><span> На первой смене</span> {currentWorker.duty1} и {currentWorker.duty2}</div></div>

  
}
if (hour>=19&&hour<=23&&minutes<=59) {

  
  return <div className={s.container}><div className={s.twoShift}><span> На второй смене</span> {currentWorker2.duty1} и {currentWorker2.duty2}</div></div>

}

if (hour>=0&&hour<7) {
  console.log('no');
  dayOfMonth-=1
        const currentWorker2 = workers2[(dayOfMonth ) % workers2.length];

// console.log([(dayOfMonth ) % workers2.length]);

  return <div className={s.container}> <div className={s.twoShift}><span> На второй смене</span> {currentWorker2?.duty1} и {currentWorker2?.duty2}</div></div>

  
}
console.log(dayOfMonth);

  

  
  










  return (
    <div >


    </div>
  )
}
