import React from 'react'
import s from './inspection.module.css'
import BackPage from '../BackPage/BackPage'
import OneTelfInspect from './OneTelfInspect'
import { useSelector } from 'react-redux'

export default function Inspection() {


	return (
		<div className={s.containerInspect} id={s.c}>
			<BackPage />

			<div className={s.wrapHeader}>
				<h2>Тех-осмотр тельфера {'ОЦЛП'}</h2>
			</div>
			<div className={s.wrapper}>
				<OneTelfInspect daysDifference={{ num: 10, strDays: 'десять' }}     / >
				<OneTelfInspect daysDifference={{ num: 30, strDays: 'месяц' }} />
				<OneTelfInspect daysDifference={{ num: 61, strDays: 'полгода' }} />
				<OneTelfInspect daysDifference={{ num: 365, strDays: 'год' }} />
				<OneTelfInspect daysDifference={{ num: 740, strDays: 'два года' }} />
			</div>
		</div>
	)
}
