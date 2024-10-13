import React, { useEffect, useRef, useState } from 'react'
import s from './sliderAll.module.css'
export default function SliderAll(props) {
	const parentAc = useRef()
	const [currentSlide, setCurrentSlide] = useState(0)
	// console.log(props)
	const { craneId, cranName, f, repair } = props
  
  useEffect(() => {
  let notes = document.querySelector(`.${s.notes}`)

console.log(notes);

}, []) 
function toggleAccordion(notes) {

	if (notes.style.maxHeight) {
		notes.style.maxHeight = null
	} else {
		notes.style.maxHeight = notes.scrollHeight + 'px'
	}
}

	function prewSlide(el) {
    // console.log(el);
    
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



	return (
		<div ref={parentAc} className={s.parent}>
			{' '}
			<header className={s.header}>№{craneId} </header>
			<div>
				<img src={f[currentSlide]} />
			</div>
			<div className={s.btns}>
				<button data-button='butPrev' onClick={prewSlide} className={s.btn}>
					<img
						src='https://cdn.icon-icons.com/icons2/81/PNG/96/arrow_left_15601.png'
						alt=''
					
					/>
				</button>
				<button data-button='butNext' onClick={nextSlide} className={s.btn}>
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
							<li className={`${s.ac} ${s.notes}`}> <span> {el.notes}</span></li>
						</ul>
					)
				})}
		</div>
	)
}
