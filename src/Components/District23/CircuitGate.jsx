import React from 'react'
import { useSelector } from 'react-redux';
import  s  from "./Gate/cssGate/circuitGate.module.css";
import g11 from './foto/gate11.jpg';
export default function CircuitGate() {
    let state=useSelector((state)=>state.gates.arrImg)
console.log(state
    );
let arImg=[g11];

function f(s) {
let copyAr=[...arImg]
return copyAr[0]
}
console.log(f(state));

    return (
    <div className={s.container}><img src={f(state)} alt="" /></div>
  )
}
