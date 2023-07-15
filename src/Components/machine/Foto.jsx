import React from 'react'
import rad from '../images/mashineFoto/rad/rad2A554.jpg'
import klepka from '../images/klepka/klepka910.jpg'
export default function Foto({mashine}) {

    const{machine,idMachine}=mashine
    console.log(machine);
    console.log(idMachine);
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
        }
        
        }


  return (
<div>
  <h1>{machine}<span>{idMachine}</span></h1>

   <img  src={sort(machine)}/></div>
  )
}
