import React, { useRef } from 'react'
import s from './back.module.css';
import { useNavigate } from 'react-router-dom';

export default function BackPage() {
const backRef = useRef()
 const navigate= useNavigate()
function back () {
  backRef.current.classList.add(s.animate)
  setTimeout(() => {

  navigate(-1)
  
}, 400);
}



  return (
		<div className={s.wrapButton}>
			<div ref={backRef} onClick={back} className={s.btn}>
				Назад
			</div>
		</div>
	)
}
