import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import React from 'react'
import s from '../licence.module.css'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
export default function Person(props) {
	const state = useSelector(state => state.job.list)
	let currentDate = new Date()

	// console.log(props)

	return (
		<div>
			{' '}
			<Accordion>
				<AccordionItem header='Осталось 10 дней' className={s.accordion}>
					<div className={s.head}>
						<div className={s.insideNameHead}>Фамилии</div>
						<div className={s.insideNameHead}>удостоверения</div>
						<div className={`${s.insideNameHead} ${s.differenceDay}`}>
							количество дней
						</div>
					</div>
					{state.map(employee =>
						employee.licences.map(licence => {
							const licenceDate = new Date(licence.date)
							const daysDifference = Math.floor(
								(licenceDate - currentDate) / (1000 * 60 * 60 * 24)
							)
							if (daysDifference < 14&&daysDifference>=0) {

								return (
									<ul
										className={s.listWorkers}
										key={licence.name + employee.id}
									>
										<li className={`${s.name} ${s.item}`}>{employee.name}</li>
										<li className={`${s.licence} ${s.item}`}>{licence.name}</li>
										<li className={`${s.difference} ${s.item}`}>
											<b>{daysDifference}</b> <span>{licence.date}.</span>
										</li>
									</ul>
								)
							}
						})
					)}
				</AccordionItem>
				<AccordionItem header='Осталось 30 дней'>
					<div className={s.head}>
						<div className={s.insideNameHead}>Фамилии</div>
						<div className={s.insideNameHead}>удостоверения</div>
						<div className={`${s.insideNameHead} ${s.differenceDay}`}>
							количество дней
						</div>
					</div>
					{state.map(employee =>
						employee.licences.map(licence => {
							{/* console.log(licence.date) */}
							const licenceDate = new Date(licence.date)
							const daysDifference = Math.floor(
								(licenceDate - currentDate) / (1000 * 60 * 60 * 24)
							)
							if (daysDifference < 30&&daysDifference>=0) {
								return (
									<ul
										className={s.listWorkers}
										key={licence.name + employee.id}
									>
										<li className={`${s.name} ${s.item}`}>{employee.name}</li>
										<li className={`${s.licence} ${s.item}`}>{licence.name}</li>
										<li className={`${s.difference} ${s.item}`}>
											{daysDifference} <span>{licence.date}.</span>
										</li>
									</ul>
								)
							}
						})
					)}
				</AccordionItem>
				<AccordionItem header='год'>
					<div className={s.head}>
						<div className={s.insideNameHead}>Фамилии</div>
						<div className={s.insideNameHead}>удостоверения</div>
						<div className={`${s.insideNameHead} ${s.differenceDay}`}>
							количество дней
						</div>
					</div>
					{state
						.map(employee =>
							employee.licences.map(licence => {
								const licenceDate = new Date(licence.date)
								const daysDifference = Math.floor(
									(licenceDate - currentDate) / (1000 * 60 * 60 * 24)
								)
								if (daysDifference < 366&&daysDifference>=0) {
									return (
										<ul
											className={s.listWorkers}
											key={licence.name + employee.id}
										>
											<li className={`${s.name} ${s.item}`}>{employee.name}</li>
											<li className={`${s.licence} ${s.item}`}>
												{licence.name}
											</li>
											<li className={`${s.difference} ${s.item}`}>
												{daysDifference} <span>{licence.date}.</span>
											</li>
										</ul>
									)
								}
							})
						)
						.sort((a, b) => a - b)}{' '}
				</AccordionItem>
			</Accordion>
		</div>
	)
}
