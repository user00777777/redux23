import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from '../css/homeComponent/home/Home.module.css'
import Duty from './home/Duty'
import Enter from './Enter/Enter'

// Reusable Card Component for consistency
const DashboardCard = ({ to, title, subtitle }) => (
	<Link to={to} className={s.linkWrapper}>
		<div className={s.card}>
			<div className={s.cardContent}>
				<div className={s.cardTitle}>{title}</div>
				{subtitle && <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{subtitle}</div>}
			</div>
		</div>
	</Link>
);

export default function Homepage() {
	const state = useSelector(state => state.duty.duty)

	return (
		<div className={s.containerHome}>
			{/* Creating a unified dashboard header/status section */}
			<div className={s.dutyContainer}>
				<Duty duty={state} />
			</div>

			{/* Keeping the Enter component as is for functionality, likely needs to fit in visually soon */}
			<Enter duty={state} />

			<main className={s.links}>
				<DashboardCard to="/phones" title="Телефоны" subtitle="Справочник" />
				<DashboardCard to="/district23" title="Участок №23" subtitle="Основной" />
				<DashboardCard to="/Painting" title="Малярка" subtitle="Цех окраски" />
				<DashboardCard to="/cranesAll" title="Краны ОЦЛП" subtitle="Оборудование" />

				{/* Placeholders for future sections or previously commented out ones if needed, 
                    currently hidden to maintain clean UI as per request */}
			</main>
		</div>
	)
}

