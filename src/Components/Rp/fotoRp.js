import React from 'react'
import frp3 from './foto_rp/frp3.jpg'
import frp9 from './foto_rp/frp9.jpg'
import frp10 from './foto_rp/frp10.jpg'
import frp1 from './foto_rp/frp1.jpg'
import frp11 from './foto_rp/frp11.jpg'
import frp12 from './foto_rp/frp12.jpg'
import frp18 from './foto_rp/frp18.jpg'
import frp4 from './foto_rp/frp4.jpg'
import frp6 from './foto_rp/frp6jpg.jpg'
import frp7 from './foto_rp/frp7.jpg'
import frp8 from './foto_rp/frp8.jpg'
export default function fotoRp(rpp) {
	let rp = rpp.rp
	const fotoRp = [frp3, frp9, frp10, frp1, frp11, frp12, frp18, frp4, frp6]
	// console.log(frp9, frp3)
	console.log(rp)

	let res = fotoRp.find(el => {
		let regexp = new RegExp(`${rp}`)
		if (regexp.test(el)) {
			return el
		} else {
			console.log('no')
		}
	})
	console.log(res)

	return res
}
