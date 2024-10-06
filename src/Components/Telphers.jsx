import React, { useEffect, useRef, useState } from 'react'
import { useMemo } from 'react'
import { createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import s from '../css/Cranes.module.css'
import { setData } from '../sliceReduce/tableSlice'
import
         Telega from './Telega'
import useStore from '../Zustund/firstZ'

// import infoTelpher from './Telpher/infoTelpher'

function Telphers() {
	const { getHoists, addHoist, removeHoist } = useStore()
  
  console.log(getHoists())
  useEffect(() => {
		const hoists = getHoists()
		console.log(hoists) // Это должно вывести [1, 2]
	}, [])

	const refP = useRef(null)

	const telRef = useRef(null)
	const refBtn = useRef(null)
	const [text, setText] = useState('')
	const [isBool, setBool] = useState(true)
	const dispatch = useDispatch()
	let navigate = useNavigate()
	let [isOpen, SetOpen] = useState(true)
	let [isNum, SetNum] = useState(0)
	let [isDataset, setData] = useState()

	const state = useSelector(state => state.hoist)

	// console.log(isDataset)

	function infoTelpher(e) {
    // useSelector
		setData(e.target.dataset.hoist)
		// console.log(isNum)
		SetNum((isNum += e.detail))
	}

	function f() {
		let monorail = document.querySelectorAll('[data-monorail]')
		for (let i = 0; i < monorail.length; i++) {
			const monoRialValue = monorail[i].dataset.monorail

			if (monorail[i].dataset.monorail == '51788') {
				monorail[i].textContent = 'Окна'
				monorail[i].classList.add(s.pp)
			}
			if (monorail[i].dataset.monorail == '51837') {
				monorail[i].classList.add(s.pp, s.p)
				monorail[i].textContent = 'Средние ряды'
			}
			if (monorail[i].dataset.monorail == '51838') {
				monorail[i].textContent = 'Стена'
				monorail[i].classList.add(s.pp)
			}
			if (monorail[i].dataset.monorail == '51763') {
				monorail[i].textContent = 'Скосы'
				monorail[i].classList.add(s.pp)
			}
			if (monorail[i].dataset.monorail == '51690') {
				monorail[i].textContent = 'Савелово'
				monorail[i].classList.add(s.pp)
			}
			if (monorail[i].dataset.monorail == '51779') {
				monorail[i].classList.add(s.pp)
				monorail[i].textContent = 'Подпятник середина'
			}
			if (monorail[i].dataset.monorail == '51691') {
				monorail[i].classList.add(s.pp)
				monorail[i].textContent = 'Подпятник стена'
			}
			if (monorail[i].dataset.monorail == '52057') {
				monorail[i].textContent = 'Сливная Яма'
				monorail[i].classList.add(s.pp)
			}
		}
	}

	function hoist() {
		let t = document.querySelectorAll('[data-hoist]')
		for (let i = 0; i < t.length; i++) {
			let a = t[i].dataset.machine
			let _hoist = t[i].dataset.hoist
			// console.log(_hoist);

			// SetData(_hoist)
			t[i].addEventListener('click', event => {
				if (t[i].dataset.hoist) {
					event.target.innerHTML = a
					event.target.classList.add(s.machine)
				}
			})

			// console.log(text);
			// console.log(_hoist);

			const regexp = new RegExp(`${text}$`)
			// console.log(regexp)

			if (regexp.test(_hoist)) {
				// console.log(t[i]);
				// console.log(regexp.test(_hoist))

				t[i].style.background = 'aqua'
				t[i].classList.add(s.plus)
			} else {
				t[i].classList.add(s.notPlus)
			}
		}
	}
	let btn = () => {
		hoist()
		f(), setText(''), setBool(!isBool)
	}

	const [rp, setRp] = useState({})

	let oldContent = null
	let oldTel = null

	function sliceHoist(event) {
		let hoist = event.target.dataset.hoist
		let ell = event.target
		let t = telRef.current
		state.data.map(el => {
			if (el.hoist.trim() == hoist && isBool) {
				if (t.classList.contains(s.test2)) {
					setRp(() => {
						return {
							rp: el.rp,
							// avt:el.avt,
							// info:el.info,
							hoist: el.hoist,
						}
					})

					// console.log('test2')

					t.classList.toggle(s.test2, false)
				} else {
					// console.log('test2>false')
					t.classList.add(s.test)

					// console.log(el.info)

					setRp(() => {
						return {
							// rp:el.rp,
							avt: el.avt,
							info: el.info,
							hoist: el.hoist,
						}
					})

					t.classList.toggle(s.test2)
				}
			}
		})
	}

	useEffect(() => {
		if (refP.current) {
			refP.current.addEventListener('click', sliceHoist)
		}

		return () => {
			if (refP.current) {
				refP.current.removeEventListener('click', sliceHoist)
			}
		}
	}, [isBool])
const findTel = el => {
	let newArHoist = Array.from(el.target.children)
		.filter(el => el.dataset.hoist)
		.map(el => el.dataset.hoist)

	// Добавляем каждый элемент массива по отдельности
addHoist(newArHoist)
}


	useEffect(() => {
		if (refP.current) {
			// Вызываем findTel сразу после монтирования компонента
			findTel({ target: refP.current })
		}
	}, [])

	return (
		<>
			<div className={s.parent} id='p' ref={refP}>
				{/* <div className={[s.div1 ,s.y].join }> e</div> */}
				<div
					data-monorail='51788'
					className={[s.div1, s.t, s.monorail, 't'].join(' ')}
				>
					{' '}
					Монорельс <span> №51788</span>
				</div>
				<div
					data-monorail='51837'
					className={[s.div2, s.t, s.monorail].join(' ')}
				>
					{' '}
					Mонорельс<span> №51837 </span>
				</div>
				<div className={[s.div3, s.t].join(' ')}>
					{' '}
					<span> </span>
				</div>
				<div
					data-monorail='51838'
					className={[s.div4, s.t, s.monorail].join(' ')}
				>
					{' '}
					Монорельс <span>№51838</span>
				</div>
				<div className={[s.div5, s.t, s.storeroom, 'klad'].join(' ')} id='k'>
					{' '}
					Кладовые
				</div>
				<div className={[s.div6, s.t, s.wc].join(' ')}> WC/Ж</div>
				{/* <div className={[s.div7].join(' ')}> </div> */}
				<div className={[s.div8, s.t, s.el].join(' ')}> Електрики</div>
				{/* <div className={[s.div9].join(' ')}> </div> */}
				<div className={[s.div10, s.t, s.wc].join(' ')}>WC=/M</div>
				<div
					data-hoist={'51906'}
					data-rp='рп 8 авт№2'
					data-machine='2A554<br><span>№052035<span/>'
					className={[s.div11, s.t, 't'].join(' ')}
				>
					51906
				</div>
				<div
					data-hoist='52044'
					data-rp='  '
					data-machine='клепка-правее'
					data-neighbour='клепка'
					className={[s.div12, s.t, 't'].join(' ')}
				>
					52044
				</div>
				<div
					data-hoist='51915'
					data-rp=''
					data-machine='клепка-левее '
					className={[s.div13, s.t, 't'].join(' ')}
				>
					{' '}
					51915
				</div>
				<div
					data-hoist='51854'
					data-rp=''
					data-machine='2A554<br><span>№052068<span/> '
					className={[s.div14, s.t, 't'].join(' ')}
				>
					51854
				</div>
				<div
					data-hoist='51927'
					data-rp=''
					data-machine='СМ2126<br><span>№052050<span/>'
					className={[s.div15, s.t, 't'].join(' ')}
				>
					{' '}
					51927
				</div>
				<div
					data-hoist='empty'
					className={[s.div16, s.t].join(' ')}
					data-machine='клепка<br><span>№052131<span/>'
				>
					{' '}
					---------
				</div>
				<div
					data-hoist='51830'
					data-rp=''
					data-machine='клепка<br><span>№052035<span/>'
					className={[s.div17, s.t, 't'].join(' ')}
				>
					{' '}
					51830{' '}
				</div>
				<div
					data-hoist='51833'
					data-rp=''
					data-machine='См2126<br><span>№052049<span/>'
					className={[s.div18, s.t, 't'].join(' ')}
				>
					{' '}
					51833
				</div>
				<div
					data-hoist='51832'
					data-rp=''
					data-machine='СБ833<br><span>№052056<span/>'
					className={[s.div19, s.t, 't'].join(' ')}
				>
					{' '}
					51832
				</div>
				<div
					data-hoist='51922'
					data-rp=''
					data-machine='2A554<br><span>№051773<span/>'
					className={[s.div20, s.t, 't'].join(' ')}
				>
					{' '}
					51922
				</div>
				<div
					data-hoist='51924'
					data-rp=''
					data-machine='2H55<br><span>№1705<span/>'
					className={[s.div21, s.t, 't'].join(' ')}
				>
					{' '}
					51924
				</div>
				<div
					data-hoist='51770'
					data-rp=''
					data-machine='СБ833<br><span>№052055<span/>'
					className={[s.div22, s.t, 't'].join(' ')}
				>
					{' '}
					51770
				</div>
				<div
					data-hoist='51871'
					data-rp=''
					data-machine='SB972<br><span>№052910<span/> '
					className={[s.div23, s.t, 't'].join(' ')}
				>
					{' '}
					51871
				</div>
				<div
					data-hoist='51926'
					data-rp=''
					data-machine='клепка<br><span>№051791<span/>'
					className={[s.div24, s.t, 't'].join(' ')}
				>
					{' '}
					51926
				</div>
				<div
					data-hoist='51925'
					data-rp=''
					data-machine='клепка<br><span>№051814<span/>'
					className={[s.div25, s.t, 't'].join(' ')}
				>
					{' '}
					51925
				</div>
				<div
					data-hoist='51792'
					data-rp=''
					data-machine='SB972 <br><span>№052911<span/>'
					className={[s.div26, s.t, 't'].join(' ')}
					onClick={infoTelpher}
				>
					{' '}
					51792
				</div>
				<div className={[s.div27, s.cart, s.t].join(' ')} data-carts='051973'>
					{' '}
					телега№ 051973
				</div>
				<div className={[s.div28, s.t].join(' ')}> Шу Телеги</div>
				<div
					data-hoist='51872'
					data-machine='SB898 <br><span>№052331<span/>'
					className={[s.div29, s.t, 't'].join(' ')}
				>
					{' '}
					51872
				</div>
				<div
					data-hoist='51908'
					data-machine='Сб973<br><span>№52913<span/>'
					className={[s.div30, s.t, 't'].join(' ')}
				>
					{' '}
					51908
				</div>
				<div
					data-hoist='51892'
					data-machine='клепка<br><span>№051791<span/>'
					className={[s.div31, s.t, 't'].join(' ')}
				>
					{' '}
					51892
				</div>
				<div className={[s.div32, s.t].join(' ')}> -----------</div>
				<div
					data-hoist='51831'
					data-machine='2A554 стол Здача'
					className={[s.div33, s.t, 't'].join(' ')}
				>
					{' '}
					51831
				</div>
				<div
					data-hoist='51891'
					data-machine='клепка<br><span>№051814<span/>'
					className={[s.div34, s.t, 't'].join(' ')}
				>
					{' '}
					51891
				</div>
				<div
					data-hoist='51834'
					data-machine='клепка<br><span>№051814<span/>'
					className={[s.div35, s.t, 't'].join(' ')}
				>
					{' '}
					51834
				</div>
				<div
					data-hoist='51771'
					data-machine='стенд-стена'
					className={[s.div36, s.t, 't'].join(' ')}
				>
					{' '}
					51771
				</div>
				<div className={[s.div37, s.cart].join(' ')} data-carts='051975'>
					Телега № 051975
				</div>
				<div className={[s.div38, s.t].join(' ')}> ВС-300</div>
				<div className={[s.div39, s.t].join(' ')}> ВДМ</div>
				<div className={[s.div44, s.cart].join(' ')} data-carts='052087'>
					{' '}
					Телега <br /> 052087{' '}
				</div>
				<div
					data-hoist='51843'
					data-machine='клепка<br><span>№051110<span/>'
					className={[s.div41, s.t, 't'].join(' ')}
				>
					{' '}
					51843{' '}
				</div>
				<div
					data-hoist='51798'
					data-machine='2A554<br><span>№051819<span/>'
					className={[s.div42, s.t, 't'].join(' ')}
				>
					{' '}
					51798
				</div>
				<div
					data-hoist='51888'
					data-machine='SB832<br><span>№052052<span/>'
					className={[s.div43, s.t, 't'].join(' ')}
				>
					{' '}
					51888
				</div>
				<div
					data-hoist='52023'
					data-machine='сливная яма'
					className={[s.div40, s.t, 't'].join(' ')}
				>
					52023{' '}
				</div>
				<div
					data-hoist='52939'
					data-machine='SB980<br><span>№52944<span/>'
					className={[s.div45, s.t, 't'].join(' ')}
				>
					{' '}
					52939
				</div>
				<div
					data-hoist='51795'
					data-machine='клепка<br><span>№051109<span/>'
					className={[s.div46, s.t, 't'].join(' ')}
				>
					{' '}
					51795
				</div>
				<div
					data-hoist='51797'
					data-machine='SB832<br><span>№052051<span/>'
					className={[s.div47, s.t, 't'].join(' ')}
				>
					51797
				</div>
				<div
					data-monorail='52057'
					className={[s.div48, s.t, s.monorail].join(' ')}
				>
					{' '}
					Монорельс <span>52057</span>
				</div>
				<div
					data-monorail='51779'
					className={[s.div49, s.t, s.monorail].join(' ')}
				>
					Монорельс <span>51779</span>
				</div>
				<div
					data-monorail='51691'
					className={[s.div50, s.t, s.monorail].join(' ')}
				>
					Монорельс <span>51691</span>
				</div>
				<div className={[s.div51, s.t].join(' ')} ref={telRef}>
					{' '}
					<Telega {...rp} data={isDataset} />
				</div>
				<div
					data-hoist='52045'
					data-machine='2H55<br><span>№11917<span/>'
					className={[s.div52, s.t, 't'].join(' ')}
				>
					{' '}
					52045
				</div>
				<div
					data-hoist='51800'
					data-machine='ФП27П<br><span>№052232<span/>'
					className={[s.div53, s.t, 't'].join(' ')}
				>
					{' '}
					51800{' '}
				</div>
				<div
					data-hoist='51880'
					data-machine='SM2414<br><span>№52800<span/>'
					className={[s.div54, s.t, 't'].join(' ')}
				>
					{' '}
					51880
				</div>
				<div
					data-hoist='51879'
					data-machine='K0501<br><span>№052150<span/>'
					className={[s.div55, s.t, 't'].join(' ')}
				>
					51879
				</div>
				<div className={[s.div56, s.cart].join(' ')} data-carts='cart'>
					{' '}
					Телега
				</div>
				<div
					data-hoist='52046'
					data-machine='K0501<br><span>№051855<span/>'
					className={[s.div57, s.t, 't'].join(' ')}
				>
					{' '}
					№52046
				</div>
				<div
					data-monorail='51763'
					className={[s.div58, s.t, s.monorail].join(' ')}
				>
					Монорельс <span> №51763</span>{' '}
				</div>
				<div
					data-monorail='51690'
					className={[s.div59, s.t, s.monorail].join(' ')}
				>
					Монорельс <span> №51690</span>{' '}
				</div>

				<input
					value={text}
					type='text'
					className={s.inp}
					onChange={e => setText(e.target.value)}
				/>
				<button className={s.btn} onClick={btn} ref={refBtn}>
					Жми
				</button>
				<h3 className={s.h3}>Малярка</h3>
				<div
					data-hoist='52805'
					data-machine='тел возле крана'
					className={[s.div60, s.t, s.mal, 't'].join(' ')}
				>
					{' '}
					52805
				</div>
				<div
					data-hoist='52806'
					data-machine='комната строполей'
					className={[s.div61, s.t, s.mal, 't'].join(' ')}
				>
					{' '}
					52806
				</div>
				<div
					data-hoist='52019'
					data-machine='выход с к'
					className={[s.div62, s.t, s.mal, 't'].join(' ')}
				>
					52019
				</div>
				<div
					data-hoist='52020'
					data-machine='погрузка телеги'
					className={[s.div63, s.t, s.mal, 't'].join(' ')}
				>
					{' '}
					52020
				</div>
			</div>
		</>
	)
}
export default Telphers
