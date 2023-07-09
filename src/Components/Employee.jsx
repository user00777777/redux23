import React, { FC } from 'react'
import s from'../css/Employee.module.css'


const Employee = ({ work1, work2 }) => {
  // console.log(work1());
  
    return (
    <div className={s.wrapper}><div className={s.work1}>{work1()}</div >
    <div>{work2()}</div>
    <img src="../" alt="" />
    <div>1</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Employee