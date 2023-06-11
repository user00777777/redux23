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

  // useEffect(() => {
  //   const savedValue = localStorage.getItem('user');
  //   console.log(savedValue);
    
  //   const t = localStorage.getItem('key');
  //   if (savedValue) {
  //     setSelectedValue(savedValue);
  //   }
  //   if (t) {
  //     setSelectedText(t);
  //   }
  // }, []);









  function btSelect() {
    console.log(btSelRef.current);
  }
let dates=  new Date().toLocaleDateString()
  function handleSelectChange() {
    let dat=  new Date().toLocaleTimeString()
    console.log(dat);
  
    const selectedIndex = selectRef.current.selectedIndex;
    // console.log(selectedIndex);
    
    // setSelectedText(selectRef.current.value);
    let user=selectRef.current.options[selectedIndex].textContent

  
    
    localStorage.setItem("user",user);
    localStorage.setItem("time",dat);
    localStorage.setItem("date",dates);
    setSelectedText( localStorage.getItem("user"))
    setSelectedValue( localStorage.getItem("date"))
  }


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

      <p>{t}</p>
      <p>дата осмотра {d}</p>
<p>время{time}</p>
      <p>произвел осмотр</p>
      <p>{user}</p>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [selectedValue, setSelectedValue] = useState('');

//   useEffect(() => {
//     const savedValue = localStorage.getItem('selectedValue');
//     if (savedValue) {
//       setSelectedValue(savedValue);
//     }
//   }, []);

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     setSelectedValue(value);
//     localStorage.setItem('selectedValue', value);
//   };

//   return (
//     <select value={selectedValue} onChange={handleSelectChange}>
//       <option value="option1">Option 1</option>
//       <option value="option2">Option 2</option>
//       <option value="option3">Option 3</option>
//     </select>
//   );
// };
