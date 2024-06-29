import { useEffect, useRef, useState } from 'react'
import style from '../cranesCss/accordionCrane.module.css'
import SliderAll from '../../SliderAll/SliderAll'

export default function AccordionCrane(props) {
	const [accordionItems, setAccordionItems] = useState([])
	// console.log(props);

	useEffect(() => {
		const items = Array.from(
			document.querySelectorAll(`.${style.accordion_item}`)
		)
		setAccordionItems(items)
	}, [])

	const handleAccordionClick = index => {
		let y = ''
		accordionItems.forEach((item, i) => {
			if (i === index) {
				// console.log(item.className)

				const content = item.querySelector(`.${style.accordion_content}`)
				// console.log(content);

				const c = item.querySelectorAll(`button`)
				let cc = Array.from(c)
				console.log(
					cc.forEach(el => {
						y = el.textContent

						console.log(y)
					})
				)
				if (y == 1 || y == 2) {
					content.style.display === 'block'
				}
         else if (content) {
					console.log('33')
					content.style.display =
						content.style.display === 'block' ? 'none' : 'block'
				}
			}
		})
	}

	return (
		<div className={style.wrapper} id={style.wr}>
			<div className={style.accordion}>
				<div
					className={style.accordion_item}
					onClick={() => handleAccordionClick(0)}
				>
					<div className={`${style.accordion_header} ${style.t}`}></div>
					<div className={style.accordion_content}>
						<SliderAll {...props} />
					</div>
				</div>
			</div>
		</div>
	)
}
