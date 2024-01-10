import React, { useEffect, useRef, useState } from 'react'
import cK from '../images/klepka/circuitKlupka.jpg'
import s from '../../css/mashineCss/mashineFoto.module.css'
import _fotoSliderArr from './_fotoSliderArr'
import foto_PlusText from './foto_PlusText'
// Импортируйте другие изображения, если они есть

const Mashine = ({ mashine }) => {
	// console.log(_fotoSliderArr(mashine).n);
	const ref = useRef(null)
	let [test, setTest] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const slides = _fotoSliderArr(mashine).ar

	useEffect(() => {
		if (ref) {
			ref.current.innerHTML = _fotoSliderArr(mashine).n
		}
	})

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className={s.sliderStyles}>
			<div>
				<div onClick={goToPrevious} className={s.leftArrowStyles}>
					❰
				</div>
				<div onClick={goToNext} className={s.rightArrowStyles}>
					❱
				</div>
			</div>
			<img
				src={slides[currentIndex]}
				alt={`Slide ${currentIndex + 1}`}
				className={s.slideStyles}
			/>
			<div className={s.dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div
						className={s.dotStyle}
						// style={dotStyle}
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
					>
						●
					</div>
				))}
			</div>
			{/* <img src={test}></img> */}
			<ol ref={ref}></ol>
			<div className={s.oneFoto}>{foto_PlusText(slides[currentIndex])}</div>
		</div>
	)
}

export default Mashine
