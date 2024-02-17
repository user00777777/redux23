import React, { useRef, useState } from 'react'
import s from './showCrane.module.css'
import style from './sliderNotes.module.css'
function Slider({ foto, repair }) {
	const arrow = useRef(null)
	const [input, setInputValue] = useState('')
	const [target, setInputTarget] = useState()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [arrows, setArrows] = useState(false)
	// console.log(foto);
	repair.forEach(el => {
		let r=el.data
console.log(Number( r));


	})
	console.log(repair[0])
	function handleInfo(el) {
		let inputData = el.target.value
		setInputValue(inputData)
		setInputTarget(inputData)
	}
	const addLocalstorage = () => {
		localStorage.setItem('inputSliderCrane', input)
		setInputValue('') // Очищаем input
		// setInputTarget('') // Очищаем target
	}

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? foto.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === foto.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex)

		setArrows(() => !arrows)
		// console.log(arrows);

		arrows
			? (arrow.current.style.opacity = '0')
			: (arrow.current.style.opacity = '1')
	}
	let isFoto = Array.isArray(foto)
	return (
		<div className={s.mainWrapper}>
			<div
				className={s.imgContainer}
				onDoubleClick={() => console.log('double')}
			>
				{Array.isArray(foto) && (
					<div ref={arrow}>
						<div className={s.goToPrevious} onClick={goToPrevious}>
							❰
						</div>
						<div onClick={goToNext} className={s.goToNext}>
							❱
						</div>
					</div>
				)}
				{Array.isArray(foto) ? (
					<img
						src={foto[currentIndex]}
						alt={`Slide ${currentIndex + 1}`}
						className={s.slide}
					/>
				) : (
					<img src={foto} alt='oneFoto' className={s.oneFoto} />
				)}
			</div>
			<div className={s.dotWrapper}>
				{isFoto &&
					foto.map((slide, slideIndex) => (
						<div
							className={`${s.dot} ${
								currentIndex == slideIndex ? s.active : ''
							}`}
							// style={dotStyle}
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
						></div>
					))}
			</div>
			{repair &&
				repair.map((el, index) => {
					return (
						<ul id={style.notesWrap} key={index}>
							{el.data && (
								<li className={`${style.repair}${style.data}`}>{el.data}</li>
							)}
							{el.notes && <li className={`${style.repair}${style.notes}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo sapiente modi, obcaecati officiis ipsa voluptate velit quae accusamus, sunt similique quisquam amet tempore excepturi, beatae inventore perspiciatis! Eligendi voluptatem alias perferendis aperiam sint dignissimos dolor inventore sit illo blanditiis.{el.notes}</li>}
							{el.title && <li className={`${style.repair} ${style.title}`}>{el.title}</li>}
				
						</ul>
					)
				})}

			{/* 
    <li className={s.repair}></li>
    <li className={s.repair}></li> */}
			<div className={style.wrapInput}>
				<input
					type='text'
					value={input}
					className={style.inpLocalStorage}
					onChange={handleInfo}
				/>
				<button className={style.btn_input} onClick={addLocalstorage}>
					Добавить заметку
				</button>
			</div>
		</div>
	)
}

export default Slider
