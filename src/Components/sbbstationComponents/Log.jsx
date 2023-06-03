import React from 'react'
import { useSelector } from 'react-redux';

export default function Log(props) {
 let time=new Date().toLocaleDateString()


let date=useSelector((state)=>state.tp32.list)
console.log(date);
let x=null
for (const i of date) {
 x=i.description

}
console.log(x);












  
  
  return (
    <div>


    </div>
  )
}
     



