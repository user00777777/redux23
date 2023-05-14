import React, { useState } from 'react';
import { useEffect,useRef } from 'react';
// import React, { useContext } from 'react';
    import s from '../../css/machineTool.module.css' 

export default function MachineTools() {
  
  const[bgColor,setBgColor]= useState(s.bgColor1)


let refAll=useRef();

useEffect(()=>{
let interval=setInterval(()=>{
  
  setBgColor((prevColor)=>prevColor===s.bgColor1?s.bgColor2:s.bgColor1 )

},1000)
return ()=>clearInterval(interval)


},[])




  return (
    
    <div className={[s.parent].join('')} id='papa' ref={refAll}>
    <div className={[s.div1,s.m,s.all].join(' ')} data-machin='2' >xdxxd </div>
    <div className={[s.div2,s.all,bgColor].join(' ')} data-machin='3'>1 </div>
    <div className={[s.div3,s.m,s.all].join(' ')}data-machin='1'>2 </div>
    <div className={[s.div4,s.mm,s.all].join(' ')}> 3</div>
    <div className={[s.div6,s.all].join(' ')}> 4</div>
    <div className={[s.div5,s.all].join(' ')}> 5</div>
    <div className={[s.div7 ,s.way,s.all].join(' ')}>6 </div>
    <div className={[s.div8,s.all].join(' ')}> </div>
    <div className={[s.div9,s.all].join(' ')}> </div>
    <div className={[s.div10,s.all].join(' ')}> </div>
    <div className={[s.div11].join(' ')}> </div>
    <div className={[s.div12].join(' ')}> </div>
    <div className={[s.div13].join(' ')}> </div>
    <div className={[s.div14].join(' ')}> </div>
    <div className={[s.div15].join(' ')}> </div>
    <div className={[s.div16].join(' ')}> </div>
    <div className={[s.div17].join(' ')}> </div>
    <div className={[s.div18].join(' ')}> </div>
    <div className={[s.div19].join(' ')}> </div>
    <div className={[s.div20].join(' ')}> </div>
    <div className={[s.div21].join(' ')}> </div>
    <div className={[s.div22].join(' ')}> </div>
    <div className={[s.div23].join(' ')}> </div>
    <div className={[s.div24].join(' ')}> </div>
    <div className={[s.div25].join(' ')}> </div>
    <div className={[s.div26].join(' ')}> </div>
    <div className={[s.div27].join(' ')}> </div>
    <div className={[s.div28].join(' ')}> </div>
    <div className={[s.div29].join(' ')}> </div>
    <div className={[s.div30].join(' ')}> </div>
    <div className={[s.div31].join(' ')}> </div>
    <div className={[s.div32].join(' ')}> </div>
    <div className={[s.div33].join(' ')}> </div>
    <div className={[s.div34].join(' ')}> </div>
    <div className={[s.div35].join(' ')}> </div>
    <div className={[s.div36].join(' ')}> </div>
    <div className={[s.div37].join(' ')}> </div>
    <div className={[s.div38].join(' ')}> </div>
    <div className={[s.div39].join(' ')}> </div>
    <div className={[s.div40].join(' ')}> </div>
    <div className={[s.div41].join(' ')}> </div>
    <div className={[s.div42].join(' ')}> </div>
    <div className={[s.div43].join(' ')}> </div>
    <div className={[s.div44].join(' ')}> </div>
    <div className={[s.div45].join(' ')}> </div>
    <div className={[s.div46].join(' ')}> </div>
    <div className={[s.div47].join(' ')}> </div>
    <div className={[s.div48].join(' ')}> </div>
    <div className={[s.div49].join(' ')}> </div>
    <div className={[s.div50].join(' ')}> </div>
    <div className={[s.div51].join(' ')}> </div>
    <div className={[s.div52].join(' ')}> </div>
    <div className={[s.div53].join(' ')}> </div>
    <div className={[s.div54].join(' ')}> </div>
    <div className={[s.div55].join(' ')}> </div>
    <div className={[s.div56].join(' ')}> </div>
    <div className={[s.div57].join(' ')}> </div>
    <div className={[s.div58].join(' ')}> </div>
    <div className={[s.div59].join(' ')}> </div>
    <div className={[s.div60].join(' ')}> </div>
    <div className={[s.div61].join(' ')}> </div>
    <div className={[s.div62].join(' ')}> </div>
    <div className={[s.div63].join(' ')}> </div>
    <div className={[s.div64].join(' ')}> </div>
    <div className={[s.div65].join(' ')}> </div>
    <div className={[s.div66].join(' ')}> </div>
    <div className={[s.div67].join(' ')}> </div>
    <div className={[s.div68].join(' ')}> </div>
    <div className={[s.div69].join(' ')}> </div>
    <div className={[s.div70].join(' ')}> </div>
    <div className={[s.div71].join(' ')}> </div>
    <div className={[s.div72].join(' ')}> </div>
    <div className={[s.div73].join(' ')}> </div>
    <div className={[s.div74].join(' ')}> </div>
    <div className={[s.div75].join(' ')}> </div>
    <div className={[s.div76].join(' ')}> </div>
    <div className={[s.div77].join(' ')}> </div>
    <div className={[s.div78].join(' ')}> </div>
    <div className={[s.div79].join(' ')}> </div>
    <div className={[s.div80].join(' ')}> </div>
    <div className={[s.div81].join(' ')}> </div>
    <div className={[s.div82].join(' ')}> </div>
    <div className={[s.div83].join(' ')}> </div>
    <div className={[s.div84].join(' ')}> </div>
    <div className={[s.div85].join(' ')}> </div>
    <div className={[s.div86].join(' ')}> </div>
    <div className={[s.div87].join(' ')}> </div>
    <div className={[s.div88].join(' ')}> </div>
    <div className={[s.div89].join(' ')}> </div>
    <div className={[s.div90].join(' ')}> </div>
    <div className={[s.div91].join(' ')}> </div>
    <div className={[s.div92].join(' ')}> </div>
    <div className={[s.div93].join(' ')}> </div>
    <div className={[s.div94].join(' ')}> </div>
    <div className={[s.div95].join(' ')}> </div>
    <div className={[s.div96].join(' ')}> </div>
    <div className={[s.div97].join(' ')}> </div>
    <div className={[s.div98].join(' ')}> </div>
    <div className={[s.div99].join(' ')}> </div>
    <div className={[s.div100].join(' ')}> </div>
    

    </div>
    
    
  )
}




// import React, { useEffect, useState } from 'react';
// import s from '../css/Substation.module.css';

// export default function Substation() {
//   const [bgColor, setBgColor] = useState(s.bgColor1);

// 