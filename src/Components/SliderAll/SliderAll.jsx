import React, { useEffect, useRef, useState } from 'react'
import s from './sliderAll.module.css'
export default function SliderAll(props) {
	const parentAc = useRef()
	const [currentSlide, setCurrentSlide] = useState(0)
	// console.log(props)
	const { craneId, cranName, f, repair } = props
	console.log(repair)
	function prewSlide() {
		const isFirstSlide = currentSlide == 0
		const newIndex = isFirstSlide ? currentSlide + 1 : f.length - 1
		setCurrentSlide(newIndex)
	}
	function nextSlide() {
		const isLastSlide = currentSlide == f.length - 1
		const newIndex = isLastSlide ? 0 : currentSlide + 1
		setCurrentSlide(newIndex)
		console.log(newIndex);
	}

	useEffect(() => {
		parentAc.current.addEventListener('click', p)

		function p(e) {
			let btn = e.target.className
			if (btn == s.btn) {
				// console.log('yes');
			}
			// console.log(btn);

			return () => {
				parentAc.current.removeEventListener('click', p)
			}
		}
	}, [])

	return (
		<div ref={parentAc} className={s.parent}>
			{' '}
			<header className={s.header}>№{craneId} </header>
			<div>
				<img src={f[currentSlide]} />
			</div>
			<div className={s.btns}>
				<button onClick={prewSlide} className={s.btn}>
					<img
						src='https://cdn.icon-icons.com/icons2/81/PNG/96/arrow_left_15601.png'
						alt=''
					
					/>
				</button>
				<button onClick={nextSlide} className={s.btn}>
					<img className={s.arrowRight}
						src='https://cdn.icon-icons.com/icons2/81/PNG/96/arrow_right_15600.png'
						alt=''
					/>
				</button>
			</div>
			{repair &&
				repair.map((el, i) => {
					return (
						<ul key={i} className={s.wrapMap} id={s.idCrane}>
							<li className={`${s.ac} ${s.title}`}>{el.title}</li>
							<li className={`${s.ac} ${s.data}`}>{el.data}</li>
							<li className={`${s.ac} ${s.notes}`}>{el.notes}</li>
						</ul>
					)
				})}
		</div>
	)
}
