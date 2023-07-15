import React from 'react'
import rad from '../images/mashineFoto/rad/rad2A554.jpg'
import klepka from '../images/klepka/klepka910.jpg'
import s from '../../css/mashineCss/foto.module.css'
export default function Foto({mashine}) {
let m=null;
let mid=null;
if (mashine) {
  


    const{machine,idMachine}=mashine
m=machine;
mid=idMachine;}
  let sort=(nameMachine)=>{

  
        switch (nameMachine) {
          case '2А554':return rad
            
            break;
          case '2Н55':return rad
            
            break;
          case 'Клепка':return klepka
            
            break;
        
          default: return null
            break;
        }}
        
        


  return (
<div className={s.parent}>
  <div className={s.text}>{m}<span>{mid}</span></div>

   <img  src={sort(m)}/></div>
  )
}
