import React, { useRef, useState } from 'react'
import s from './showCrane.module.css'
function Slider({ foto }) {
	const arrow = useRef(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [arrows, setArrows] = useState(false)

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
    console.log(arrows);
    
		arrows
			? (arrow.current.style.opacity = '0')
			: (arrow.current.style.opacity = '1')
	}
let isFoto=Array.isArray(foto)
	return (
		<div className={s.mainWrapper}>
			<div className={s.imgContainer}>
			{	Array.isArray(foto)&&<div ref={arrow}>
				
					<div className={s.goToPrevious} onClick={goToPrevious}>
						❰
					</div>
					<div onClick={goToNext} className={s.goToNext}>
						❱
					</div>
				</div>}
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
			{/* <img src={test}></img> */}
			<ol></ol>
			<div></div>
		</div>
	)
}

export default Slider
