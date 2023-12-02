import React from 'react'
// import rad from '../images/mashineFoto/rad/rad2A554.jpg'
// import klepka from '../images/klepka/klepka910.jpg'
// import sb973 from '../images/mashineFoto/rad/sb973/sb973.jpg'
// import sm2126 from '../images/mashineFoto/rad/sm2126/sm2126.jpg'
// import sb833 from '../images/mashineFoto/sb833/sb833.jpg'
import s from '../../css/mashineCss/foto.module.css'
import _foto from './_foto'

export default function Foto({ mashine }) {
	let m = null
	let mid = null
	// console.log(mashine)

	if (mashine) {
		const { machine, idMachine } = mashine
		m = machine
		mid = idMachine
	}

	return (
		<div className={s.parent}>
			<div className={s.text}>
				{m}
				<span>{mid}</span>
			</div>
			<div className={s.imgwrapper}>
				<img className={s.image} src={_foto(m, mid)} />
			</div>
			<div></div>
		</div>
	)
}
