import React, { useState } from 'react'
import one from '../images/one.jpg'
// import two from "../images/two.jpg";
// import three from "../images/three.jpg";

import s from '../../css/mashineCss/mashine.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import Radialka from './Radialka'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { mashineGet } from '../../sliceReduce/machineReduser'

const MachineTools = props => {
	let fatherRef = useRef(null)

	let dispatch = useDispatch()
	let stateMashine = useSelector(state => state.mashine.data)
	// console.log(stateMashine);

	const father = event => {
		let currentElement = event.target
		const closestDiv = event.target.closest('div')
		// console.log(closestDiv);

		if (closestDiv) {
			let mashine = closestDiv.textContent
			// console.log(mashine);

			dispatch(mashineGet(mashine))
		}

		if (currentElement) {
			// console.log(el.textContent);
			//   console.log(previousElement);
			// dispatch( mashineGet({text:el.textContent,src:}))
		}

		// if (el.classList.contains(s.div9)) {
		//   el.classList.remove(s.div9);
		//   el.classList.add(s.radialka);
		// } else {
		//   console.log('no');
		// }
	}

	useEffect(() => {
		if (fatherRef.current) {
			fatherRef.current.addEventListener('click', father)
		}

		return () => {
			if (fatherRef.current) {
				fatherRef.current.removeEventListener('click', father)
			}
		}
	}, [fatherRef]) // Добавляем fatherRef в массив зависимостей

	// console.log(stateMashine);

	return (
		<div className={s.parent} ref={fatherRef}>
			<div className={[s.div1].join('')} id={s.ma}>
				{' '}
				<span>Майстерня</span>
			</div>
			<div className={[s.div2].join('')}>Туалет</div>
			<div className={[s.div3].join('')}>Кладова</div>
			<div className={[s.div4].join(' ')}>ГСM</div>
			<div className={[s.div5].join(' ')}> Дорога в никуда</div>
			<div></div>
			<div className={[s.div6, s.radialka].join(' ')}>
				<Link to='/radialka'>2А554</Link>
				<Link to='/radialka'>
					<span>№52035</span>
				</Link>
			</div>
			{/* <div className={[s.div7].join('')}>11</div> */}
			{/* <div className={[s.div8].join('')}>1</div> */}
			<div className={[s.div9, s.radialka].join(' ')}>
				<Link to='/radialka'>2А554</Link>
				<Link to='/radialka'>
					<span>№5268</span>
				</Link>
			</div>
			<div className={[s.div10, s.sm2126].join(' ')}>
				СМ2126{' '}
				<Link to='/radialka'>
					<span>№52050</span>
				</Link>
			</div>
			<div className={[s.div11, s.sb833].join(' ')}>
				СБ833
				<Link to='/radialka'>
					<span>№52056</span>
				</Link>
			</div>
			<div className={[s.div12, s.sb972].join(' ')}>
				СБ972
				<Link to='/radialka'>
					<span>№52910</span>
				</Link>
			</div>
			<div className={[s.div13, s.sm2126].join(' ')}>
				СМ2126
				<Link to='/radialka'>
					<span>№52049</span>
				</Link>
			</div>
			<div className={[s.div14, s.sb833].join(' ')}>
				СБ833
				<Link to='/radialka'>
					<span>№52055</span>
				</Link>
			</div>
			<div className={[s.div15, s.sb972].join(' ')}>
				СБ972
				<Link to='/radialka'>
					<span>№52911</span>
				</Link>
			</div>
			<div className={[s.div16, s.klepka].join(' ')}>
				Клепка
				<Link to='/radialka'>
					<span>№52131</span>
				</Link>
			</div>
			<div className={[s.div17, s.klepka].join(' ')}>
				Клепка
				<Link to='/radialka'>
					<span>№52155</span>
				</Link>
			</div>
			<div className={[s.div18, s.radialka].join(' ')}>
				2А554
				<Link to='/radialka'>
					<span>№51773</span>
				</Link>
			</div>
			<div className={[s.div19, s.radialka].join(' ')}>
				2Н55
				<Link to='/radialka'>
					<span>№1705</span>
				</Link>
			</div>
			<div className={[s.div20, s.klepka].join(' ')}>
				Клепка
				<Link to='/radialka'>
					<span>№51791</span>
				</Link>
			</div>
			<div className={[s.div21, s.klepka].join(' ')}>
				Клепка
				<Link to='/radialka'>
					<span>№51814</span>
				</Link>
			</div>
			<div className={[s.div22, s.t].join(' ')}>
				Телега ---{' '}
				<Link to='/radialka'>
					<span> №051973</span>
				</Link>
				---
			</div>
			<div className={[s.div23].join('')}>
				ШУ
				<Link to='/radialka'>
					<span>телеги</span>
				</Link>
			</div>
			<div className={[s.div24, s.sb972].join(' ')}>
				Am19176
				<Link to='/radialka'>
					<span>№52333</span>
				</Link>
			</div>
			<div className={[s.div25, s.sb833].join(' ')}>
				СБ898
				<Link to='/radialka'>
					<span>№052331</span>
				</Link>
			</div>
			<div className={[s.div26, s.sm2126].join(' ')}>
				СБ973
				<Link to='/radialka'>
					<span>№52913</span>
				</Link>
			</div>
			{/* <div className={[s.div27].join('')}><Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div28, s.klepka].join(' ')}>
				клепка
				<Link to='/radialka'>
					<span>№51910</span>
				</Link>
			</div>
			{/* <div className={[s.div30].join('')}>empty<Link to='/radialka'><span></span></Link></div> */}

			{/* <div className={[s.div31,s.klepka].join(' ')}>клепка<Link to='/radialka'><span>№051814</span></Link></div> */}
			<div className={[s.div32, s.radialka].join(' ')}>
				2А554
				<Link to='/radialka'>
					<span>№51824</span>
				</Link>
			</div>
			<div className={[s.div33].join('')}>
				Ящики
				<Link to='/radialka'>
					<span>рабочих</span>
				</Link>
			</div>
			<div className={[s.div34].join('')}>
				К28 86
				<Link to='/radialka'>
					<span>№51778</span>
				</Link>
			</div>
			<div className={[s.div35].join('')}>
				Намотка{' '}
				<Link to='/radialka'>
					<span>проволки</span>
				</Link>
			</div>
			<div className={[s.div36].join('')}>
				Стенд
				<Link to='/radialka'>
					<span></span>
				</Link>
			</div>
			<div className={[s.div37].join('')}>
				телега---
				<Link to='/radialka'>
					<span>№051975</span>
				</Link>
				---
			</div>
			<div className={[s.div38, s.weld].join(' ')}>
				ВС-300
				<Link to='/radialka'>
					<span>№51631</span>
				</Link>
			</div>
			{/* <div className={[s.div39].join('')}>4<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div40].join('')}>
				Шу{' '}
				<Link to='/radialka'>
					<span>телеги</span>
				</Link>
			</div>
			{/* <div className={[s.div41].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div42, s.weld].join(' ')}>
				ВДМ
				<Link to='/radialka'>
					<span>№51667</span>
				</Link>
			</div>
			<div className={[s.div43].join('')}>
				СБ890
				<Link to='/radialka'>
					<span>№52944</span>
				</Link>
			</div>
			{/* <div className={[s.div44].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div45].join('')}>
				М3048
				<Link to='/radialka'>
					<span>№51836</span>
				</Link>
			</div>
			<div className={[s.div46].join('')}>
				М3048
				<Link to='/radialka'>
					<span>№51748</span>
				</Link>
			</div>
			<div className={[s.div47, s.klepka].join(' ')}>
				клепка
				<Link to='/radialka'>
					<span>№51110</span>
				</Link>
			</div>
			<div className={[s.div48, s.radialka].join(' ')}>
				2А554
				<Link to='/radialka'>
					<span>№51819</span>
				</Link>
			</div>
			<div className={[s.div49, s.sb832].join(' ')}>
				СБ832
				<Link to='/radialka'>
					<span>№52052</span>
				</Link>
			</div>
			{/* <div className={[s.div50].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div51].join('')}>
				телега
				<Link to='/radialka'>
					<span>№052087</span>
				</Link>
			</div>
			{/* <div className={[s.div52].join('')}>3<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div53, s.klepka].join(' ')}>
				клепка
				<Link to='/radialka'>
					<span>№51109</span>
				</Link>
			</div>
			<div className={[s.div54, s.radialka].join(' ')}>
				2Н55
				<Link to='/radialka'>
					<span>№2653</span>
				</Link>
			</div>
			<div className={[s.div55, s.sb832].join(' ')}>
				СБ832
				<Link to='/radialka'>
					<span>№052051</span>
				</Link>
			</div>
			<div className={[s.div56].join('')}>
				Дорога
				<Link to='/radialka'>
					<span></span>
				</Link>
			</div>
			<div className={[s.div57, s.radialka].join(' ')}>
				2Н55
				<Link to='/radialka'>
					<span>№11917</span>
				</Link>
			</div>
			{/* <div className={[s.div58].join('')}>3<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div59].join('')}>
				ФП27П
				<Link to='/radialka'>
					<span>№52232</span>
				</Link>
			</div>
			{/* <div className={[s.div60].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			{/* <div className={[s.div61].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			{/* <div className={[s.div62].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div63].join('')}>
				СМ2414
				<Link to='/radialka'>
					<span>№52800</span>
				</Link>
			</div>
			{/* <div className={[s.div64].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			{/* <div className={[s.div65].join('')}>1<Link to='/radialka'><span></span></Link></div> */}
			{/* <div className={[s.div66].join('')}>2<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div67].join('')}>
				2Н135
				<Link to='/radialka'>
					<span>№51776</span>
				</Link>
			</div>
			<div className={[s.div68].join('')}>
				2С 132
				<Link to='/radialka'>
					<span>51772</span>
				</Link>
			</div>
			{/* <div className={[s.div69].join('')}>5<Link to='/radialka'><span></span></Link></div> */}
			<div className={[s.div70].join('')}>
				K0501
				<Link to='/radialka'>
					<span>№52150</span>
				</Link>
			</div>
			<div className={[s.div71].join('')}>
				Телега
				<Link to='/radialka'>
					<span>№51656</span>
				</Link>
			</div>
			<div className={[s.div72].join('')}>
				K0501
				<Link to='/radialka'>
					<span>№51855</span>
				</Link>
			</div>

			<div className={[s.div76].join(' ')}>
				6Р82
				<Link to='/radialka'>
					<span>№1419</span>
				</Link>
			</div>
		</div>
	)
}

export default MachineTools
