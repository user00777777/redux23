import React, { useRef, useState } from 'react'
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import s from '../../css/mashineCss/rarialka.module.css'

import r from '../images/mashineFoto/rad/photo_2023-07-11_22-44-56.jpg'

import MachineTools from './machineTools';
import Foto from './Foto';
import Mashine from './Mashine';


export default function Radialka() {
let navigate=useNavigate();
let ref=useRef()
let [ss ,setS]=useState(!false)

let selector=useSelector((state)=>state.mashine.result);
// console.log(selector)  ;
let numArr=selector?.length-1;
const mashine=selector[numArr];
console.log(mashine);

// const nameMachine= mashine?.el.machine
// const myNumber= mashine?.el.idMachine

// const {id,idMachine,machine}=mashine?.el;
// console.log(id,idMachine,machine);






let goBack=()=>navigate(-1);

 return (
    <div className={s.father}>


<div className={s.fatherTwo}>
  <div className={s.imgContainer}>
  { ss?  <Foto
mashine={mashine?.el}
  />:<Mashine mashine={mashine?.el}/>}

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
<button onClick={()=> setS(()=>!ss)} >Схема</button>
<li><Link to='engine'> Двигателя</Link></li>
<li><Link to='different'> Разное</Link></li>
{/* <div><h1>{nameMachine&&nameMachine}</h1><span>{myNumber}</span></div> */}
</ul>

</div>
{/* <div className={s.circuit}>dd</div> */}

    </div>
  )
}




