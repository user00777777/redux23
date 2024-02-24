import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  s  from "../css/homeComponent/home/Home.module.css";
import PlumbersDuty from '../css/homeComponent/Plambers/PlumbersDuty';
import Duty from './home/Duty';


export  default function Homepage() {
 
 
  return (
		<div className={s.wrapDuty}>
			<div className={s.duty}>
				<Duty />
			</div>
			<div className={s.duty}>
				<PlumbersDuty />
			</div>

			<main className={s.links}>
				<div className={[s.link1, s.link].join(' ')}>
					<Link to='/phones'>
						<span className={s.l}>Телефоны</span>
					</Link>
				</div>
				<div className={[s.link2, s.link].join(' ')}>
					<Link to='/district23'>
						<span className={s.l}>Участок №23</span>
					</Link>
				</div>
				<div className={[s.link3, s.link].join(' ')}>
					<Link to='Painting'>
						<span className={s.l}>Малярка</span>
					</Link>
				</div>
				<div className={[s.link4, s.link].join(' ')}></div>
				<div className={[s.link5, s.link].join(' ')}></div>
			</main>
		</div>
	)
}




