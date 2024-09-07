import React, { useState } from 'react'
import s from './inspection.module.css'
import BackPage from '../BackPage/BackPage'
import OneTelfInspect from './OneTelfInspect'
import { useSelector } from 'react-redux'

export default function Inspection() {
	const [strRes, setStrRes] = useState([])
	let handleClick = str => {
		switch (str) {
			case 'десять':
			case 'месяц':
			case 'полгода':
			case 'год':
			case 'два года':
				setStrRes(prevStrRes => {
					if (!prevStrRes.includes(str)) {
						return [...prevStrRes, str]
					}
					return prevStrRes
				})
				break
			default:
				break
		}

		// console.log(str)
	}
	console.log(strRes)

	return (
		<div className={s.containerInspect} id={s.c}>
			<BackPage />

			<div className={s.wrapHeader}>
				<h2>Тех-осмотр тельфера {'ОЦЛП'}</h2>
			</div>
			<div className={s.wrapper}>
		{	strRes.includes('десять') &&	<OneTelfInspect
					daysDifference={{
						num: 10,
						strDays: 'десять',
						handleClick: handleClick,
					}}
				/>}
		{	strRes.includes('месяц') &&				<OneTelfInspect
					daysDifference={{
						num: 30,
						strDays: 'месяц',
						handleClick: handleClick,
					}}
				/>}
	{	strRes.includes('полгода') &&				<OneTelfInspect
					daysDifference={{
						num: 61,
						strDays: 'полгода',
						handleClick: handleClick,
					}}
				/>}
	{	strRes.includes('год') &&		<OneTelfInspect
					daysDifference={{
						num: 365,
						strDays: 'год',
						handleClick: handleClick,
					}}
				/>}
			{strRes.includes('два года') &&	<OneTelfInspect
					daysDifference={{
						num: 740,
						strDays: 'два года',
						handleClick: handleClick,
					}}
				/>}
			</div>
		</div>
	)
}
