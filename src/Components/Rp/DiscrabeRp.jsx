import React from 'react'
import { useEffect } from 'react'
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

	const $table = document.createElement('table'),
		$tbody = document.createElement('tbody')
	// function create_tr(itemName, itemNom) {
	// 	console.log(itemName, itemNom)

	// 	const $tr = document.createElement('tr'),
	// 		$tr_Nom = document.createElement('tr'),
	// 		// $th_name = (document.createElement('th').textContent = 'Наименование'),
	// 		$th_i = (document.createElement('td').textContent = itemName),
	// 		$th_nom = (document.createElement('td').textContent = itemNom),
	// 		$th_kvt = document.createElement('td')
	// 	table?.append($table)
	// 	$table.append($tbody)
	// 	$tbody.append($tr)
	// 	$tbody.append($tr_Nom)
	// 	$tr.append($th_i)
	// 	$tr_Nom.append($th_nom)

	// 	// $tr.append($th_nom)
	// }
	useEffect(() => {
		state.forEach(el => {
			console.log(el)

			// create_tr(el.name, el.nom)
		})
	}, [])
	const [name] = state

	console.log(name)

	return (
		<div>
			<div>
				<button onClick={() => navigate(-1)}>back</button>
			</div>
			<div ref={tableRef}>
				<table>
					<tbody>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
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
