/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import s from './cranesAll.module.css'
import { useSelector } from 'react-redux'
import RegCrane from './RegCrane'



export default function ChildCrane({  crane2,crane3='',crane1,crane4='' }) {
const craneNum1=crane1?.crane
const reg1=crane1?.reg
const craneNum2=crane2?.crane
const reg2=crane2?.reg
const craneNum3=crane3?.crane
const reg3=crane3?.reg
const craneNum4=crane4?.crane
const reg4=crane4?.reg
// console.log(reg2);

return(
  <div className={`${s.craneInside} ${reg4 && s.craneInside2}`} >
   <div data-crane={craneNum1} className={s.craneMin} >№{reg1}</div>
   <div data-crane={craneNum2} className={s.craneMin}>№{reg2}</div>
   {reg3&&<div data-crane={craneNum3} className={s.craneMin}>№{reg3}</div>}
   {reg4&&<div data-crane={craneNum4} className={`${s.craneMin} ${s.craneMin4}`}>№{reg4}</div>}
   
   
  </div>)

}
	