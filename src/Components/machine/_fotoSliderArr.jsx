import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cK from '../images/klepka/circuitKlupka.jpg'
// import k109 from "../images/klepka/circuitKlupka.jpg";
import shedule from '../images/SheduleDistrict23.jpg'
// import s8331  from "../images/mashineFoto/sb833/circuit833/circuit 8338.jpg";
import s8332 from '../images/mashineFoto/sb833/circuit833/circuit 833_2.jpg'
import s8333 from '../images/mashineFoto/sb833/circuit833/circuit 833_3.jpg'
import s8334 from '../images/mashineFoto/sb833/circuit833/circuit 833_5.jpg'
import s8335 from '../images/mashineFoto/sb833/circuit833/circuit _4833.jpg'
import s8336 from '../images/mashineFoto/sb833/circuit833/circuit833.jpg'
// import s8337  from "../images/mashineFoto/sb833/circuit833/circuit8331.jpg";
import s8338 from '../images/mashineFoto/sb833/circuit833/circuit8332.jpg'
// import s8339  from "../images/mashineFoto/sb833/circuit833/circuit8333.jpg";
import s833_1 from '../images/mashineFoto/sb833/circuit833/circuit8335.jpg'
import s833_2 from '../images/mashineFoto/sb833/circuit833/circuit8337.jpg'
import s833_3 from '../images/mashineFoto/sb833/circuit833/circuit8339.jpg'
import s833_4 from '../images/mashineFoto/sb833/circuit833/circuit833_10.jpg'
import s8333_5 from '../images/mashineFoto/sb833/circuit833/circuit833_5.jpg'
import s8333_6 from '../images/mashineFoto/sb833/circuit833/circuit833_7.jpg'
import s833_7 from '../images/mashineFoto/sb833/circuit833/circuit833Full.jpg'
import s833_8 from '../images/mashineFoto/sb833/circuit833/circuitdiagram833.jpg'
import s833_9 from '../images/mashineFoto/sb833/circuit833/photo8336.jpg'
import s8333_0 from '../images/mashineFoto/sb833/circuit833/sb8334.jpg'
import _rad2A554 from './2A554/_rad2A554'

export default function _fotoSliderArr({ machine, idMachine }) {
	// console.log(machine)
	const arrFoto = []

	function createObj(ar, n) {
		return {
			ar,
			n,
		}
	}
	let rp = ''
	switch (machine) {
		case 'Клепка':
			if (idMachine == '№51791') {
				rp = '14'
			}
			if (idMachine == '№52131') {
				rp = '14'
			} else if (idMachine == '№52131') {
				rp = '11'
			}
			arrFoto.length = 0
			arrFoto.push(cK)
			const obj = createObj(
				arrFoto,
				` <li>${machine} ${idMachine}</li> <li >установлено первое положение</li>
       <li>запитан от ${rp}</li>
        `
			)
			return obj
		case 'СБ833':
			arrFoto.length = 0
			arrFoto.push(
				s8332,
				s8333,
				s8333_0,
				s8333_5,
				s8333_6,
				s8334,
				s8335,
				s8336,
				s8338,
				s833_1,
				s833_2,
				s833_3,
				s833_4,
				s833_7,
				s833_8,
				s833_9
			)
			const sb833_52055 = createObj(
				arrFoto,
				` <li>${machine} ${idMachine}</li>
          `
			)
			return sb833_52055
		case '2А554':
			// console.log(1111111111)
			
			const rad2a554 = createObj(
				_rad2A554(),
				` <li> 'jhjhjh'</li>
          `)
          return rad2a554
			
		// console.log(Array.isArray( _rad2A554))

		default:
			arrFoto.splice(0, arrFoto.length)
			arrFoto.push(
				'https://www.vectorstock.com/royalty-free-vector/cute-electrician-pear-cartoon-vector-42127729'
			)
			const objdef = createObj(
				arrFoto,
				`Схема участка Другой информации не найдено`
			)
			return objdef
			break
	}
}
