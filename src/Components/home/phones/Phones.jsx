import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './phone.module.css'
export default function Phones() {
	let navigate = useNavigate()

	let back = () => navigate(-1)
	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<button onClick={back} type='button' className={s.myButton}>
					{' '}
					Назад
				</button>
			</div>
			<table>
				<tbody>
					<tr>
						<td>Энергетик</td>
						<td>9-90</td>
					</tr>
					<tr>
						<td> электрики участок №11</td>
						<td>6-22</td>
					</tr>
					<tr>
						<td>Мех.уч электрики</td>
						<td>5-79</td>
					</tr>

					<tr>
						<td>крановая электр-и</td>
						<td>3-92</td>
					</tr>
					<tr>
						<td>Вентиляция</td>
						<td>5-58</td>
					</tr>
					<tr>
						<td>сантехники</td>
						<td>8-53</td>
					</tr>
					<tr>
						<td>Мех.уч слесаря</td>
						<td>5-59</td>
					</tr>
					<tr>
						<td>Пультовая газ</td>
						<td>4-20</td>
					</tr>
					<tr>
						<td>Зру дежурный</td>
						<td>888</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
