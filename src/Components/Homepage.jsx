import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  s  from "../css/homeComponent/home/Home.module.css";


export  default function Homepage() {
 
 
  return (

              <div className={[s.container].join(' ')}>
              <main className={s.links}>

<div className={[s.link1,s.link].join(' ')}><Link to='/duty'><span>Дежурные електрики 11уч</span></Link></div>
<div className={[s.link2,s.link].join(' ')}><Link to='/district23'><span>23Участок</span></Link></div>
<div className={[s.link3,s.link].join(' ')}><Link><span></span></Link></div>
<div className={[s.link4,s.link].join(' ')}></div>
<div className={[s.link5,s.link].join(' ')}></div>



              </main>
              </div>


  );
}




