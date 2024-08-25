import React, { useState } from 'react'

export default function newEmployee(name, licence, id) {
	const currentDate = new Date()

	const ar3 = licence.filter(el => {
		const licenceDate = new Date(el.date)
		const daysDifference = (licenceDate - currentDate) / (1000 * 60 * 60 * 24)

		return daysDifference < 366
	})
let ar2=ar3.sort((a, b) => a.date - b.date)

	if (ar2.length > 0) {
		return {
			licences: ar2,
			name,
			id, // если id нужен в возвращаемом объекте
		}
	}

	return null
}
