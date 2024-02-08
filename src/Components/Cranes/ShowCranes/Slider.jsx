import React, { useRef, useState } from 'react'
import s from './showCrane.module.css'
import style from './sliderNotes.module.css'
function Slider({ foto, repair }) {
	const arrow = useRef(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [arrows, setArrows] = useState(false)
	// console.log(foto);
	console.log(repair)

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
			<div className={s.imgContainer} onDoubleClick={()=>console.log('double')}>
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
			{repair.travelMotor_Cabin &&
				repair.travelMotor_Cabin.map((el, index) => {
					return (
						<ul className={style.notesWrap} key={index}>
							{el.motorStarters && (
								<li className={`${style.repair}${s.one}`}>
									{el.motorStarters}
								</li>
							)}
							{el.repairMotorsCabin && (
								<li className={style.repair}>{el.repairMotorsCabin}</li>
							)}
							{el.cables && <li className={style.repair}>{el.cables}</li>}
						</ul>
					)
				})}

			{/* 
    <li className={s.repair}></li>
    <li className={s.repair}></li>
    <li className={s.repair}></li> */}

			<div></div>
		</div>
	)
}

export default Slider
