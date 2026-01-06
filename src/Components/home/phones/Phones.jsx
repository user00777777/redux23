import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './phone.module.css'
import { FiArrowLeft } from 'react-icons/fi'; // Using react-icons for back arrow

export default function Phones() {
	let navigate = useNavigate()
	let back = () => navigate(-1)

	const phoneData = [
		{ name: "Энергетик", number: "9-90" },
		{ name: "Электрики участок №11", number: "6-22" },
		{ name: "Мех.уч электрики", number: "5-79" },
		{ name: "Крановая электр-и", number: "3-92" },
		{ name: "Вентиляция", number: "5-58" },
		{ name: "Сантехники", number: "8-53" },
		{ name: "Мех.уч слесаря", number: "5-59" },
		{ name: "Пультовая газ", number: "4-20" },
		{ name: "ЗРУ дежурный", number: "888" },
	];

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<button onClick={back} type='button' className={s.myButton}>
					<FiArrowLeft /> Назад
				</button>
			</div>

			<div className={s.gridContainer}>
				{phoneData.map((item, index) => (
					<div key={index} className={s.phoneCard}>
						<div className={s.department}>{item.name}</div>
						<div className={s.number}>{item.number}</div>
					</div>
				))}
			</div>
		</div>
	)
}

