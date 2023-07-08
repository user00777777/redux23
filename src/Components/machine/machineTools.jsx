import React, { useState } from 'react';
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";


import s from '../../css/mashineCss/mashine.module.css';

const MachineTools = () => {
  return (
    <div className={s.parent}>
      <div className={[s.div1].join('')}>Майстерня</div>
      <div className={[s.div2].join('')}>Туалет</div>
      <div className={[s.div3].join('')}>Кладова</div>
      <div className={[s.div4].join(' ')}>ГСM</div>
      <div className={[s.div5].join(' ')}> <div >Дорога в никуда</div></div>
      <div className={[s.div6].join('')}>2A554</div>
      {/* <div className={[s.div7].join('')}>11</div> */}
      {/* <div className={[s.div8].join('')}>1</div> */}
      <div className={[s.div9].join('')}>2А554   <span>№5268</span></div>
      <div className={[s.div10].join('')}>СМ2126 <span>№52050</span></div>
      <div className={[s.div11].join('')}>СБ833<span>№52056</span></div>
      <div className={[s.div12].join(' ')}>СБ972<span>№52910</span></div>
      <div className={[s.div13].join('')}>СМ2126<span>№52049</span></div>
      <div className={[s.div14].join('')}>СБ833<span>№52055</span></div>
      <div className={[s.div15].join('')}>СБ972<span>№52911</span></div>
      <div className={[s.div16].join('')}>Клепка<span>№52131</span></div>
      <div className={[s.div17].join('')}>Клепка<span>№52035</span></div>
      <div className={[s.div18].join('')}>2А554<span>№51773</span></div>
      <div className={[s.div19].join('')}>2Н55<span>№1705</span></div>
      <div className={[s.div20].join('')}>Клепка<span>№51791</span></div>
      <div className={[s.div21].join('')}>Клепка<span>№51814</span></div>
      <div className={[s.div22].join('')}>Телега --- <span>  №051973</span>---</div>
      <div className={[s.div23].join('')}>ШУ<span>телеги</span></div>
      <div className={[s.div24].join('')}>Am19176<span>№52333</span></div>
      <div className={[s.div25].join('')}>СБ898<span>№052331</span></div>
      <div className={[s.div26].join('')}>СБ973<span>№52913</span></div>
      {/* <div className={[s.div27].join('')}><span></span></div> */}
      <div className={[s.div28].join('')}>клепка<span>№51791</span></div>
      {/* <div className={[s.div30].join('')}>empty<span></span></div> */}

      <div className={[s.div31].join('')}>клепка<span>№051814</span></div>
      <div className={[s.div32].join('')}>2А554<span>№51824</span></div>
      <div className={[s.div33].join('')}>Ящики<span>рабочих</span></div>
      <div className={[s.div34].join('')}>К28 86<span>№51778</span></div>
      <div className={[s.div35].join('')}>Намотка <span>проволки</span></div>
      <div className={[s.div36].join('')}>Стенд<span></span></div>
      <div className={[s.div37].join('')}>телега---<span>№051975</span>---</div>
      <div className={[s.div38].join('')}>ВС-300<span></span></div>
      {/* <div className={[s.div39].join('')}>4<span></span></div> */}
      <div className={[s.div40].join('')}>Шу <span>телеги</span></div>
      {/* <div className={[s.div41].join('')}>1<span></span></div> */}
      <div className={[s.div42].join('')}>ВДМ<span></span></div>
      <div className={[s.div43].join('')}>СБ890<span>№52944</span></div>
      {/* <div className={[s.div44].join('')}>1<span></span></div> */}
      <div className={[s.div45].join('')}>М30 48<span>№51836</span></div>
      <div className={[s.div46].join('')}>М30 48<span>№51748</span></div>
      <div className={[s.div47].join('')}>клепка<span>№51819</span></div>
      <div className={[s.div48].join('')}>2А554<span>№51819</span></div>
      <div className={[s.div49].join('')}>СБ832<span>№52052</span></div>
      {/* <div className={[s.div50].join('')}>1<span></span></div> */}
      <div className={[s.div51].join('')}>телега<span>№052087</span></div>
      {/* <div className={[s.div52].join('')}>3<span></span></div> */}
      <div className={[s.div53].join('')}>клепка<span>№51109</span></div>
      <div className={[s.div54].join('')}>2Н55<span>№2653</span></div>
      <div className={[s.div55].join('')}>СБ832<span>№052051</span></div>
      <div className={[s.div56].join('')}>Дорога<span></span></div>
      <div className={[s.div57].join('')}>2Н55<span>№11917</span></div>
      {/* <div className={[s.div58].join('')}>3<span></span></div> */}
      <div className={[s.div59].join('')}>ФП27П<span>№52232</span></div>
      {/* <div className={[s.div60].join('')}>1<span></span></div> */}
      {/* <div className={[s.div61].join('')}>1<span></span></div> */}
      {/* <div className={[s.div62].join('')}>1<span></span></div> */}
      <div className={[s.div63].join('')}>СМ2414<span>№52800</span></div>
      {/* <div className={[s.div64].join('')}>1<span></span></div> */}
      {/* <div className={[s.div65].join('')}>1<span></span></div> */}
      {/* <div className={[s.div66].join('')}>2<span></span></div> */}
      <div className={[s.div67].join('')}>2Н135<span>№51776</span></div>
      <div className={[s.div68].join('')}>2С 132<span>51772</span></div>
      {/* <div className={[s.div69].join('')}>5<span></span></div> */}
      <div className={[s.div70].join('')}>K0501<span>№52150</span></div>
      <div className={[s.div71].join('')}>Телега<span>№51656</span></div>
      <div className={[s.div72].join('')}>K0501<span>№51855</span></div>
      {/* <div className={[s.div73].join('')}>9<span></span></div> */}
      {/* <div className={[s.div74].join('')}>10<span></span></div>
      <div className={[s.div75].join('')}>11<span></span></div>
      <div className={[s.div76].join('')}>12<span></span></div>
      <div className={[s.div77].join('')}>13<span></span></div>
      <div className={[s.div78].join('')}><span></span></div>
      <div className={[s.div79].join('')}><span></span></div>
      <div className={[s.div80].join('')}><span></span></div>
      <div className={[s.div81].join('')}><span></span></div>
      <div className={[s.div82].join('')}><span></span></div>
      <div className={[s.div83].join('')}><span></span></div>
      <div className={[s.div84].join('')}><span></span></div>
      <div className={[s.div85].join('')}><span></span></div> */}

    </div>
  );
};

export default MachineTools;

