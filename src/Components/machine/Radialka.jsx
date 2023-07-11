import React, { useRef, useState } from 'react'
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import s from '../../css/mashineCss/rarialka.module.css'
import rad from '../images/mashineFoto/rad/rad2A554.jpg'
import r from '../images/mashineFoto/rad/photo_2023-07-11_22-44-56.jpg'

import MachineTools from './machineTools';


export default function Radialka() {
let navigate=useNavigate();
let ref=useRef()
let [ss ,setS]=useState()
  let d = document.createElement('div');
  d.textContent = '44';


  
  // out.appendChild(d);




// let d = document.createElement('div');
// d.textContent = '33';
// console.log(d);


let goBack=()=>navigate(-1);

function f() {

setS(<img src={r}/>)


}



  return (
    <div className={s.father}>


<div className={s.fatherTwo}>
  <div className={s.imgContainer}>
<img src={rad}/>
</div>    
<button className={s.button} onClick={goBack}>
Назад
<div className={s.hoverEffect} ref={ref}>
<div>
</div>
</div></button></div>
<div className={s.list}>
<ul>
{/* <li><Link to='circuitDiagram'> Схема</Link></li> */}
<button onClick={f} >Схема</button>
<li><Link to='engine'> Двигателя</Link></li>
<li><Link to='different'> Разное</Link></li>

</ul>
<h1>{ss}</h1>
</div>

    </div>
  )
}




