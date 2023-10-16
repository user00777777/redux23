import React from 'react'
import frp3 from './foto_rp/frp3.jpg'
export default function fotoRp(rpp) {
	let rp = rpp.rp
	const fotoRp = [frp3]
	console.log(frp3)
	console.log(rp)

	let res = fotoRp.map(el => {
		if (el.match(`${rp}`)) {
			return el
		} else {
			console.log('no')
		}
	})
	return res
}
