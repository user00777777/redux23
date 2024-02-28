import React, { useContext, useEffect, useRef, useState } from 'react'
import cK from '../images/klepka/circuitKlupka.jpg'
import s from '../../css/mashineCss/mashineFoto.module.css'
import _fotoSliderArr from './_fotoSliderArr'
import foto_PlusText from './foto_PlusText'
import Contexst from '../../App'
// Импортируйте другие изображения, если они есть

const Mashine = ({ mashine }) => {
	const myContexst1 = useContext(Contexst)
	console.log(mashine)
	const ref = useRef(null)
	const refDots = useRef(null)
	let [test, setTest] = useState(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const slides = _fotoSliderArr(mashine).ar
	console.log(slides);

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

	const goToSlide = (slideIndex, slide) => {
		setCurrentIndex(slideIndex)
	}
// console.log(slides[currentIndex])

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
						ref={refDots}
						// style={dotStyle}
						key={slideIndex}
						onClick={() => goToSlide(slideIndex, slide)}
					>
						●
					</div>
				))}
			</div>
			<ol ref={ref}></ol>
			<div className={s.oneFoto}>{foto_PlusText(slides[currentIndex])}</div>
		</div>
	)
}

export default Mashine
