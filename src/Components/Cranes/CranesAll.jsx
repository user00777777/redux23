import React from 'react'
import s from './cranesAll.module.css'

export default function CranesAll() {
	return (
		<div className={s.containerCrane}>
			<ul className={s.wrapCrane}>
				<li className={`${s.crane} ${s.crane1}`}>
					{' '}
					<div className={`${s.craneInside} ${  s.crane7Inside}`}>рег.номер№2349  </div>
					<div className={s.crane7Inside}>2</div>{' '}
				</li>{' '}
				<li className={`${s.crane} ${s.crane2}`}>item11</li>
				<li className={`${s.crane} ${s.crane3}`}>item12</li>{' '}
				<li className={`${s.crane} ${s.crane4}`}>item12</li>
				<li className={`${s.crane} ${s.crane5}`}>item13</li>
				<li className={`${s.crane} ${s.crane6}`}>item13</li>
				<li className={`${s.crane} ${s.crane7}`}>item13</li>
				<li className={`${s.crane} ${s.crane8}`}>item13</li>
				<li className={`${s.crane} ${s.crane9}`}>item13</li>
			</ul>
			<ul className={s.copyUl}>
				<li className={`${s.copyLi} ${s.copyLi1}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi2}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi3}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi4}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi5}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi6}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi7}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi8}`}>1</li>
				<li className={`${s.copyLi} ${s.copyLi9}`}>1</li>
			</ul>
		</div>
	)
}
