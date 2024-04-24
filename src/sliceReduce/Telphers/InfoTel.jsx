import React from 'react'
import s from './repair.module.css'
export default function InfoTel({ hoist }) {
	let telfer = hoist && String(hoist).trim()
console.log( telfer);

	switch (telfer) {
		case '51792':
			return (
				<ul className={s.telf}>
					<li>
						<time>../03/2024</time> Замена двигателя подьема{' '}
					</li>
				</ul>
			)
		case '52806':	return (
			<ul className={s.telf}>
				<li>
					{' '}
					<time>04/24/2024 </time>
          Заменен двигатель передвижения и щека
				</li>
			</ul>
		)
    
		
      break
		case '0':
			return (
				<ul className={s.telf}>
					<li>
						{' '}
						<time>../03/2024</time>e
					</li>
				</ul>
			)
		default:
			return <h1>Информация не внесена</h1>
	}
}
