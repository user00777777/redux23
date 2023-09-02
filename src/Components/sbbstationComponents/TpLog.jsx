import React, { useEffect, useRef, useState } from 'react';
import s from "./../../css/homeComponent/tp.module.css";

export default function TpLog({ k }) {
  const tpRef = useRef();
  const btSelRef = useRef();
  const selectRef = useRef();
  const [date, setSelectedValue] = useState('');
  const [selectedT, setSelectedText] = useState('');
  let t=localStorage.getItem('key')
  let user=localStorage.getItem('user');
  let d=localStorage.getItem('date');
  let time=localStorage.getItem('time');
console.log(date);




console.log(selectedT);









let dates=  new Date().toLocaleDateString()
  function handleSelectChange() {
    let dat=  new Date().toLocaleTimeString()
 
  
    const selectedIndex = selectRef.current.selectedIndex;
    const selec  =selectRef.current.options[selectedIndex].value
    console.log(selec);
    
    // setSelectedText(selectRef.current.value);
    let currentuser=selectRef.current.options[selectedIndex].textContent

 
    
  localStorage.setItem("user",currentuser);
    localStorage.setItem("time",dat);
    localStorage.setItem("date",dates);
    setSelectedText( localStorage.getItem("user"))
    setSelectedValue( localStorage.getItem("date"))
  }
  let blinks=localStorage.getItem('blink');
  let tp=''
  if (blinks=='true') {
    tp='T1,T2'
  } else {
    tp=`${t}`
  }
  blinks=='true'?1:2
console.log(tp);


  return (
    <div ref={tpRef} className={s.wrapper}>
     
      <select name="" id="" className={s.select} ref={selectRef} onChange={handleSelectChange}>
        <option value={selectedT}>Петриченко</option>
        <option value={selectedT}>Шевченко</option>
        <option value={selectedT}>Андриенко</option>
        <option value={selectedT}>Тригуб</option>
        <option value={selectedT}>Дидусь</option>
      </select>
      {/* <button ref={btSelRef} className={s.btSel} onClick={btSelect}>Жми</button> */}
<div className={s.miniLog}>
      <p>В нагрузке:<b>{tp}</b></p>
      <p>дата осмотра <span>{d}</span></p>
<time>время <span> {time}</span></time>
      <p>произвел осмотр<span> {user}</span></p>
   </div> </div>
  );
}


