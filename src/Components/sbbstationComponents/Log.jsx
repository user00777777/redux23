import React from 'react'

export default function Log(props) {
 let time=new Date().toLocaleDateString()
console.log(time);
  let tp=props.tp
  
  
  return (
    <div><ul>
    <li>Изменено {time}</li>
    <li>В нагрузке {tp}</li>
    
    </ul></div>
  )
}
