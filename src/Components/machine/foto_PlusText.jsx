  import React from "react";


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
super()
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
let OneSlide=props;
let x=null;

  const a1 = new Table (31,32,33)
 


  // console.log(slides[currentIndex]);
  const regexp=new RegExp(`Circuit8337.jpg`,'i')
  if (/Circuit8337.jpg/i.test(OneSlide)){

  x=true
  console.log('yes');
  

  
  
  }
  else{
    console.log('не попал');
    
  x=false
  
  }
  console.log('boolean',x);
  
  
  return <div>{x&&a1?.a1Z()}</div>;
}
