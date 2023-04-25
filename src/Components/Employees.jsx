import React from 'react'
 import Employee from './Employee'
export default function Employees() {



   
let PahaLusenko =( changeAr(count(4, 0), count(4, 1)));
let Malko =( changeAr(count(4, 1), count(4, 2)));
let Sinkevish= (changeAr(count(4, 3), count(4, 0)));
let Kruglui =( changeAr(count(4, 2), count(4, 3)));

function changeAr(numb, str) {
  let strAr = ([] = str.map((el) => el + ""));
  let x = ([] = numb.concat(strAr));
  return x.sort(( a, b)  => a - b);
}

  

let dates = new Date();
let month = dates.getMonth() + 1;
let date = dates.getDate();
let minute = dates.getMinutes();
let hour = dates.getHours();
let isFirstShift =
hour < 19 && minute < 59 && hour >= 7 && minute < 59 ? true : false;
// console.log(isFirstShift);
function count(a, b) {
let x = [];
for (let i = 1; i <= 31; i++) {
if (i % a == b) {
  x.push(i);
}
}
return x;
}

let strday2 = isFirstShift ? date : date + "";

let allDuty = [
{
shift: Malko,
duty: "Малько",
nextOne: isFirstShift ? "Лисенко" : "Сінкевич",
},
{
shift: Sinkevish,
duty: "Сінкевич",
nextOne: isFirstShift ? "Круглий" : "Малько",
},
{
shift: PahaLusenko,
duty: "Лисенко",
nextOne: isFirstShift ? "Сінкевич" : "Круглий",
},
{
shift: Kruglui,
duty: "Круглий",
nextOne: isFirstShift ? "Малько" : "Малько",
},
];


function outDuty(duty) {
let rr = duty.reduce(
  (acc, el) => {
    function cN(n) {
      if (date <= 21 && month == 2 && n == "Круглий") return "Гекало";

      return n;
    }
    if (el.shift.includes(strday2)) {
      return (acc = { one: cN(el.duty), two: cN(el.nextOne) });
    }
    return acc;
  },
  
  {one:'',two:''}
);

let { one: Now_Shift, two: Next_Shift } = rr;
Now_Shift;
Next_Shift;
return {
  first: () => {
    return isFirstShift
      ? `Зараз на первій зміні ${Now_Shift} `
      : `Зараз на другій зміні ${Now_Shift}`;
  },
  second: () => {
    return `Наступний діжурный ${Next_Shift}`;
  },
};
}

const{first,second}=outDuty(allDuty)
// console.log(first());

  return (
    <div className='main'><Employee work1={first} work2={second}/></div>
  )
}
