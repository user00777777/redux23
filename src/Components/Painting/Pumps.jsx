import React from 'react'
import s from './Pumps/pumps.module.css';
import imgPump from './Pumps/pumsFoto/nasos.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
import BackPage from '../BackPage/BackPage';

export default function Pumps() {

  return (
    <div className={s.container}>
    <BackPage/>

<div className={s.wrapImg}>

<img src={imgPump} alt=""  />

</div>

    </div>
  )
}
