import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function DiscrabeRp() {
	const state = useSelector(state => state?.rp.res)
	let navigate = useNavigate()
	const { rp } = useParams()
	const tableRef = useRef()
	const table = tableRef.current
	console.log(table)
	const [el, setElement] = useState()

	const $table = document.createElement('table'),
		$tbody = document.createElement('tbody')

	// }
	useEffect(() => {
		state?.forEach(el => {
			setElement(el)

			// create_tr(el.name, el.nom)
		})
	}, [])

	console.log(el.name)

	return (
		<div>
			<div>
				<button onClick={() => navigate(-1)}>back</button>
			</div>
			<div ref={tableRef}>
				<table>
					<tbody>
						<tr>
							<th>Название</th>
							<th>Номинальный ток</th>
							<th>Imax</th>
						</tr>
						<tr>
							<td>11</td>
							<td>222</td>
							<td>333</td>
						</tr>
						<tr>
							<td>11</td>
							<td>222</td>
							<td>333</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
