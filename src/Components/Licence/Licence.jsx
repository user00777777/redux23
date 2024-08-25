import React from 'react'
import s from './licence.module.css'
import BackPage from '../BackPage/BackPage'
import { useDispatch, useSelector } from 'react-redux'
import Person from './Warning/Person'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export default function Licence() {
	const currentDate = new Date()
	const dispatch = useDispatch()
	const state = useSelector(state => state.job.list)
	console.log(state)

	return (
		<div className={s.container}>
			<BackPage />

			<Person differenceDays='30' sevenDays='7' />
		
			<div className={s.wrapper}>
			
			</div>
		</div>
	)
}
