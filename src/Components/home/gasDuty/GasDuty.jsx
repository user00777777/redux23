import React from 'react'
import getDuty from '../_dutyWorkers'

export default function GasDuty() {
	console.log(getDuty(1, 2, 3, 4))

	return (
		<div>
			<div>{getDuty('Бабец', 'Головченко', 'Немченко', 'Писаренко')}</div>
			<div>{getDuty('Круглый', 'Синькевичь', 'Лысенко', 'Малько')}</div>
			<div>{getDuty('Выходець', 'Стасюк', 'Чеча', 'Колабин')}</div>
		</div>
	)
}
