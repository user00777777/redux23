import { Accordion, AccordionItem } from '@szhsin/react-accordion'
import React from 'react'
import s from '../licence.module.css'
import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
export default function Person(props) {
	const state = useSelector(state => state.job.list)
	let currentDate = new Date()

	console.log(props)

	return (
		<div>
			{' '}
			<Accordion>
				<AccordionItem header='Осталось 10 дней'>
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
							if (daysDifference < 7) {
								return (
									<ul
										className={s.listWorkers}
										key={licence.name + employee.id}
									>
										<li className={`${s.name} ${s.item}`}>{employee.name}</li>
										<li className={`${s.licence} ${s.item}`}>{licence.name}</li>
										<li className={`${s.difference} ${s.item}`}>
											{daysDifference} дней
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
							const licenceDate = new Date(licence.date)
							const daysDifference = Math.floor(
								(licenceDate - currentDate) / (1000 * 60 * 60 * 24)
							)
							if (daysDifference < 30) {
								return (
									<ul
										className={s.listWorkers}
										key={licence.name + employee.id}
									>
										<li className={`${s.name} ${s.item}`}>{employee.name}</li>
										<li className={`${s.licence} ${s.item}`}>{licence.name}</li>
										<li className={`${s.difference} ${s.item}`}>
											{daysDifference} 
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
								if (daysDifference < 366) {
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
												{daysDifference} 
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
