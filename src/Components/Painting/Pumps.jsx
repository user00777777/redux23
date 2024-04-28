import React from 'react'
import s from './Pumps/pumps.module.css';
import imgPump from './Pumps/pumsFoto/nasos.jpg';
import { useNavigate } from 'react-router-dom';

export default function Pumps() {

  return (
    <div className={s.container}>

<div className={s.wrapImg}>

<img src={imgPump} alt=""  />

</div>

    </div>
  )
}
