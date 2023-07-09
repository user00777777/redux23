import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import s from '../../css/mashineCss/rarialka.module.css'
import rad from '../images/mashineFoto/rad2A554.jpg'


export default function Radialka() {
let navigate=useNavigate();




let goBack=()=>navigate(-1);


  return (
    <div className={s.father}>


<div className={s.fatherTwo}>
  <div className={s.imgContainer}>
<img src={rad}/>
</div>    
<button className={s.button} onClick={goBack}>
Назад
<div className={s.hoverEffect}>
<div>
</div>
</div></button></div>
<div className={s.list}>
<ul>
<li><Link to='circuitDiagram'> Схема</Link></li>
<li><Link to='engine'> Двигателя</Link></li>
<li><Link to='different'> Разное</Link></li>

</ul>

</div>

    </div>
  )
}

