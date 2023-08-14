  import React from "react";

import s from './stylesM/fotoText.module.css'
export default function foto_PlusText(props) {


class Parent{
constructor(x,y)
{
this.x=x;
this.y=y;
}
show(i){
 return this.x+this.y+i
}
}

class Table extends Parent{

constructor(a,b,c){
super(c)
  this.a=a
  this.b=b
  this.c=c
}
a1Z(){
  return  <ul>
    <li>исходное[ {this.a}]</li>
    <li>ограничение по минусу[ {this.b}]</li>
    <li>ограничение по плюсу[{this.c}]</li>
    </ul>


}


}
let oneSlide=props;
console.log(oneSlide);

let x=null;
oneSlide&&console.log('прошло');


  const a1 = new Table (31,32,33)
 


  // console.log(slides[currentIndex]);
  // Circuit8337.jpg
  // const regexp=new RegExp(`Circuit8337.jpg`,'i')
  const regexp=new RegExp(`circuit8337`,'i')
  // 
    if (oneSlide) {
      
    console.log(oneSlide);
    
if (regexp.test(oneSlide)){
  x=true
  console.log('yes');
  console.log('');
  
  

  
  
  }}
  else{
    console.log('не попал');
    
  x=false
  
  }
  console.log('boolean',x);
  
  
  return <div>
    {/* <table >
      <tbody className={s.tbody}>
<tr className={s.tr1}>
<td>1</td>
<td>2</td>
<td>3</td>
            </tr>
<tr className={s.tr2}>
  <td>11</td>
  <td>12</td>
  <td>13</td>
            </tr>
            </tbody>
    </table> */}
    
    
    </div>;
}
