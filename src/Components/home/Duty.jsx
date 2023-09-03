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
  


   
   
   
    let vasj= new Shift('Малько','');
    let stas= new Shift("Круглый","");
    let sinkevich= new Shift("Синкевичь","");
    let paha= new Shift("Гекало"/*"Лысенко"*/);
  
    const workers1 = [vasj,stas,sinkevich,paha ];
    const workers2 = [paha, vasj,stas,sinkevich] ;
   
      // const currentShift = shifts[(day ) % shifts.length];
      // console.log(currentShift);
     let changeDayOfMonth =dayOfMonth



      const currentWorker2 = workers2[(changeDayOfMonth-=1 ) % workers2.length];
console.log(currentWorker2.duty1);

      



if (hour>=7&&hour<19) {

  const currentWorker = workers1[(changeDayOfMonth ) % workers1.length];
  // console.log(currentWorker);
  
  return <div className={s.container}><div className={s.twoShift}> <h2>Деж-й електрик</h2> <h2 className={s.d12}>{currentWorker.duty1}  {/*{currentWorker.duty2}*/}</h2></div></div>

  
}
if (hour>=19&&hour<=23&&minutes<=59
  ) {
// dayOfMonth-=1
  console.log(1);
  
  return <div className={s.container}><div className={s.twoShift}><h2>Дежурные Електрики:</h2><h2 className={s.d12}> {currentWorker2.duty1} {/*и {currentWorker2.duty2}*/}</h2></div></div>

}
if ( hour>=0&&hour<7) {
changeDayOfMonth-=1;

        const currentWorker2 = workers2[(changeDayOfMonth ) % workers2.length];

// console.log([(dayOfMonth ) % workers2.length]);

  return <div className={s.container}> <div className={s.twoShift}> Дежурные електрик:<h2> {currentWorker2.duty1}</h2> {/*и {currentWorker2?.duty2}*/}</div></div>

  
}

  

  
  










  return (
    <div >


    </div>
  )
}
