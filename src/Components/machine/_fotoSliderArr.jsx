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
import _arFotoCirkuit972 from './SB_972/foto_972/_arFotoCirkuit972'
import _fotoAr2126 from './Sm2126/_fotoAr2126'
import f_2414 from './MashineFoto/CM2414/f_2414'
import f_800 from './MashineFoto/CM800/f_800'
import rad2H55 from './2A554/fotoRad/2A554_Picture/2h55.jpg'
// <<<<<<< HEAD
import samTelega from './MashineFoto/Telega/telSam.jpg'
import vs300 from '../images/vs300.jpg'
import poluavtomat from '../images/poluavtomat.jpg'
import vent1 from '../../fotoMaljrka/vent.jpg';

//  import _fotoAr2126 from './Sm2126/_fotoAr2126'

// >>>>>>> 47e0b640fc535284ba17dd3157e0c9f0dc41be4b
export default function _fotoSliderArr({ machine, idMachine }) {
	console.log(machine, idMachine)
	const arrFoto = []
	let defOrigin =
		'https://previews.123rf.com/images/alonastep/alonastep1601/alonastep160100178/49947561-%D0%BD%D0%B5%D1%82-%D0%BE%D0%B1%D1%83%D0%B2%D1%8C-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%B5%D0%B4%D1%83%D0%BF%D1%80%D0%B5%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5-%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8F-%D0%B7%D0%B0%D0%BF%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.jpg'
	function createObj(ar, n, def = defOrigin) {
		return {
			ar,
			n,
			def,
		}
	}
	let rp = ''
	// console.log(machine=='2Н55');

	switch (machine) {
		case 'Клепка': {
			if (idMachine == '№51791') {
				rp = '14'
			}
			if (idMachine == '№52131') {
				rp = '14'
			}
			//  else if (idMachine == '№52131') {
			// 	rp = '11'
			// }
			arrFoto.length = 0
			arrFoto.push(cK)
			const obj = createObj(
				arrFoto,
				` <li>${machine} ${idMachine}</li> <li >установлено первое положение</li>
       <li>запитан от ${rp}</li>
        `
			)
			return obj
		}
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
			// eslint-disable-next-line no-case-declarations
			const sb833_52055 = createObj(
				arrFoto,
				` <li>${machine} ${idMachine}</li>
          `
			)
			return sb833_52055

		case '2А554':
			// console.log(1111111111)

			// eslint-disable-next-line no-case-declarations
			const rad2a554 = createObj(
				_rad2A554(),
				` <li> '2A554'</li>
          `
			)
			return rad2a554
		// eslint-disable-next-line no-case-declarations
		case '2Н55':
			// eslint-disable-next-line no-case-declarations
			let obj = createObj([rad2H55], idMachine)
			return obj
		case 'СБ972':
			if (idMachine == '№52911') {
				// console.log('3')

				let obj = createObj(_arFotoCirkuit972(), idMachine)
				return obj
			} else {
				// console.log('false')
			}
			break
		case 'СМ2126':
			console.log(idMachine)

			if (idMachine == '52049' || idMachine == '№52050') {
				// console.log('okc')

				let sm2126 = createObj(_fotoAr2126(), idMachine)
				return sm2126
			} else {
				// console.log('nooKs')
			}
			break
		// eslint-disable-next-line no-case-declarations
		case 'СМ2414':
			// eslint-disable-next-line no-case-declarations
			let obj2414 = createObj(f_2414(), idMachine)
			return obj2414
		// eslint-disable-next-line no-case-declarations
		case 'СБ890':
			let obj890 = createObj(f_800(), idMachine)
			return obj890
		// eslint-disable-next-line no-case-declarations
		case 'телега':
			let objTelega = createObj([samTelega], idMachine)
			return objTelega
		// eslint-disable-next-line no-case-declarations
		case 'ВС-300':
			// eslint-disable-next-line no-case-declarations
			let objVs300 = createObj([vs300,poluavtomat], idMachine)
			return objVs300
		case 'vent':
			// eslint-disable-next-line no-case-declarations
			let ventil = createObj([vent1], '')
			return ventil

		// eslint-disable-next-line no-fallthrough
		default:
			console.log('def')
			// arrFoto.splice(0, arrFoto.length)
			arrFoto.push(
				'https://previews.123rf.com/images/alonastep/alonastep1601/alonastep160100178/49947561-%D0%BD%D0%B5%D1%82-%D0%BE%D0%B1%D1%83%D0%B2%D1%8C-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%B5%D0%B4%D1%83%D0%BF%D1%80%D0%B5%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B5-%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8F-%D0%B7%D0%B0%D0%BF%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA.jpg'
			)
			// eslint-disable-next-line no-case-declarations

			// eslint-disable-next-line no-case-declarations
			const objdef = createObj(
				arrFoto,
				`Схема участка Другой информации не найдено`,
				defOrigin
			)

			return objdef
	}
}
