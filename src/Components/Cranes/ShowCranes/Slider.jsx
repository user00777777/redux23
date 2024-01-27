import React, { useState } from 'react'
import s from './showCrane.module.css'
function Slider({ foto }) {
	console.log(foto)
	const [currentIndex, setCurrentIndex] = useState(0)

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
	}

	return (
		<div className={s.mainWrapper}>
			<div className={s.imgContainer}>
				<div>
					<div className={s.goToPrevious} onClick={goToPrevious}>
						❰
					</div>
					<div onClick={s.goToNext} className={s.goToNext}>
						❱
					</div>
				</div>
				<img
					src={foto[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					className={s.slide}
				/>
			</div>
			<div>
				{foto.map((slide, slideIndex) => (
					<div
						// style={dotStyle}
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
					>
						●
					</div>
				))}
			</div>
			{/* <img src={test}></img> */}
			<ol></ol>
			<div></div>
		</div>
	)
}

export default Slider
