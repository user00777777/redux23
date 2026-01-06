import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../css/Cranes.module.css'
import Telega from './Telega'
import useStore from '../Zustund/firstZ'

function Telphers() {
	const { addHoist } = useStore()
	const dispatch = useDispatch()
	const state = useSelector(state => state.hoist)
	const telRef = useRef(null)

	// Combined state for search and highlighting
	// Replacing 'f()' and 'hoist()' logic with declarative state
	const [searchText, setSearchText] = useState('')
	const [isSearchActive, setIsSearchActive] = useState(false)
	const [clickedMachines, setClickedMachines] = useState({})

	// Telega state
	const [rp, setRp] = useState({})
	const [isDataset, setIsDataset] = useState()
	const [telegaAnimClass, setTelegaAnimClass] = useState('')

	// --- Configuration Data ---
	// Moving hardcoded JSX validation to data structures significantly cleans up the render

	// Monorails with special names (Logic from f())
	const specialMonorails = {
		'51788': { text: 'Окна' },
		'51837': { text: 'Средние ряды', extraClass: s.p },
		'51838': { text: 'Стена' },
		'51763': { text: 'Скосы' },
		'51690': { text: 'Савелово' },
		'51779': { text: 'Подпятник середина' },
		'51691': { text: 'Подпятник стена' },
		'52057': { text: 'Сливная Яма' }
	}

	// --- Helpers ---

	const isHighlightMatch = (hoistId) => {
		if (!isSearchActive || !searchText) return false
		try {
			const regexp = new RegExp(`${searchText}$`)
			return regexp.test(hoistId)
		} catch { return false }
	}

	// --- Handlers ---

	const toggleSearchMode = () => {
		setIsSearchActive(prev => !prev)
		if (isSearchActive) setSearchText('') // Optional: clear on close
	}

	const onHoistClick = (e, hoistId, machineHtml, rpInit, avtInit, infoInit) => {
		if (!hoistId) return

		// 1. Reveal Machine Info (replaces old click listener)
		if (machineHtml) {
			setClickedMachines(prev => ({ ...prev, [hoistId]: machineHtml }))
		}

		// 2. Telega Logic (replaces sliceHoist)
		// Find data from Redux first
		const hoistData = state.data.find(el => el.hoist.trim() == hoistId)

		// Only activate if "search/bool" is active (mimicking original: `if (el.hoist... && isBool)`)
		// The original code toggles `isBool` with the button. Assuming default true or based on button.
		// Let's assume the button toggle controls this permission as well.

		// Actually original `isBool` is toggled by button. Let's use `isSearchActive` as that flag, 
		// or just allow click always if that matches the user need. 
		// Original: `f(), setText(''), setBool(!isBool)` on button click.
		// So `isBool` toggles. 

		// Logic for Telega box animation/content:
		setTelegaAnimClass(prev => (prev === 'test2' ? 'test' : 'test2')) // Simplified toggle logic

		if (hoistData) {
			setRp({
				avt: hoistData.avt,
				info: hoistData.info,
				hoist: hoistData.hoist,
				rp: hoistData.rp
			})
			setIsDataset(hoistId)
		} else {
			// Fallback if not in Redux but clicked in UI
			setRp({
				avt: avtInit,
				info: infoInit,
				hoist: hoistId,
				rp: rpInit
			})
			setIsDataset(hoistId)
		}
	}

	// --- Render Helpers ---

	const renderMonorail = (divClass, id, defaultText = null) => {
		// Determine content based on search state + ID
		const special = specialMonorails[id]

		// If search/mode is active and we have a special name, use it
		// The original code used `f()` which changed textContent. `f()` ran on button click.
		// If `!isSearchActive` (equivalent to default state where `f()` hasn't run?), show default.
		// WAIT: `setBool(!isBool)` -> initial `isBool`=true. `btn` runs `f()`.
		// Inspecting original: `f()` runs on btn click. The text changes to "Окна", etc.

		let content = defaultText || <>Монорельс <span>№{id}</span></>
		let extraClasses = ''

		if (isSearchActive && special) {
			content = special.text
			extraClasses = `${s.pp} ${special.extraClass || ''}`
		}

		return (
			<div
				data-monorail={id}
				className={`${divClass} ${s.t} ${s.monorail} ${extraClasses} ${isSearchActive && special ? 'pp-active' : ''}`}
			>
				{content}
			</div>
		)
	}

	const renderHoist = (divClass, id, machineHtml, rpVal, extraClass = '') => {
		const isHighlighted = isHighlightMatch(id)
		const isClicked = clickedMachines[id]

		// Classes
		const classes = [
			divClass,
			s.t,
			't',
			isHighlighted ? s.plus : '', // Highlight match
			(isSearchActive && searchText && !isHighlighted) ? s.notPlus : '', // Dim others
			isClicked ? s.machine : '', // Type check: machineHtml replaces content + class `machine`
			extraClass
		].filter(Boolean).join(' ')

		return (
			<div
				className={classes}
				onClick={(e) => onHoistClick(e, id, machineHtml, rpVal)}
				style={isHighlighted ? { background: 'aqua' } : {}} // Match inline style from original
			>
				{isClicked ? (
					<span dangerouslySetInnerHTML={{ __html: machineHtml }} />
				) : (
					id
				)}
			</div>
		)
	}

	return (
		<div className={s.parent} id='p' ref={telRef}>
			{/* Grid Layout Elements */}

			{renderMonorail(s.div1, '51788')}

			<div className={[s.div2, s.t, s.monorail].join(' ')}>
				Mонорельс<span> №51837 </span>
			</div>

			<div className={[s.div3, s.t].join(' ')}><span> </span></div>

			{renderMonorail(s.div4, '51838')}

			<div className={[s.div5, s.t, s.storeroom, 'klad'].join(' ')} id='k'> Кладовые</div>
			<div className={[s.div6, s.t, s.wc].join(' ')}> WC/Ж</div>
			<div className={[s.div8, s.t, s.el].join(' ')}> Електрики</div>
			<div className={[s.div10, s.t, s.wc].join(' ')}>WC=/M</div>

			{/* Hoist Cards - exact mapping */}
			{renderHoist(s.div11, '51906', '2A554<br><span>№052035<span/>', 'рп 8 авт№2')}
			{renderHoist(s.div12, '52044', 'клепка-правее', '  ')}
			{renderHoist(s.div13, '51915', 'клепка-левее ')}
			{renderHoist(s.div14, '51854', '2A554<br><span>№052068<span/> ')}
			{renderHoist(s.div15, '51927', 'СМ2126<br><span>№052050<span/>')}

			<div data-hoist='empty' className={[s.div16, s.t].join(' ')} data-machine='клепка<br><span>№052131<span/>'> ---------</div>

			{renderHoist(s.div17, '51830', 'клепка<br><span>№052035<span/>')}
			{renderHoist(s.div18, '51833', 'См2126<br><span>№052049<span/>')}
			{renderHoist(s.div19, '51832', 'СБ833<br><span>№052056<span/>')}
			{renderHoist(s.div20, '51922', '2A554<br><span>№051773<span/>')}
			{renderHoist(s.div21, '51924', '2H55<br><span>№1705<span/>')}
			{renderHoist(s.div22, '51770', 'СБ833<br><span>№052055<span/>')}
			{renderHoist(s.div23, '51871', 'SB972<br><span>№052910<span/> ')}
			{renderHoist(s.div24, '51926', 'клепка<br><span>№051791<span/>')}
			{renderHoist(s.div25, '51925', 'клепка<br><span>№051814<span/>')}
			{renderHoist(s.div26, '51792', 'SB972 <br><span>№052911<span/>')}

			<div className={[s.div27, s.cart, s.t].join(' ')} data-carts='051973'> телега№ 051973</div>
			<div className={[s.div28, s.t].join(' ')}> Шу Телеги</div>

			{renderHoist(s.div29, '51872', 'SB898 <br><span>№052331<span/>')}
			{renderHoist(s.div30, '51908', 'Сб973<br><span>№52913<span/>')}
			{renderHoist(s.div31, '51892', 'клепка<br><span>№051791<span/>')}

			<div className={[s.div32, s.t].join(' ')}> -----------</div>

			{renderHoist(s.div33, '51831', '2A554 стол Здача')}
			{renderHoist(s.div34, '51891', 'клепка<br><span>№051814<span/>')}
			{renderHoist(s.div35, '51834', 'клепка<br><span>№051814<span/>')}
			{renderHoist(s.div36, '51771', 'стенд-стена')}

			<div className={[s.div37, s.cart].join(' ')} data-carts='051975'>Телега № 051975</div>
			<div className={[s.div38, s.t].join(' ')}> ВС-300</div>
			<div className={[s.div39, s.t].join(' ')}> ВДМ</div>

			{/* div44 was out of order in original */}
			<div className={[s.div44, s.cart].join(' ')} data-carts='052087'> Телега <br /> 052087 </div>

			{renderHoist(s.div41, '51843', 'клепка<br><span>№051110<span/>')}
			{renderHoist(s.div42, '51798', '2A554<br><span>№051819<span/>')}
			{renderHoist(s.div43, '51888', 'SB832<br><span>№052052<span/>')}
			{renderHoist(s.div40, '52023', 'сливная яма')}

			{renderHoist(s.div45, '52939', 'SB980<br><span>№52944<span/>')}
			{renderHoist(s.div46, '51795', 'клепка<br><span>№051109<span/>')}
			{renderHoist(s.div47, '51797', 'SB832<br><span>№052051<span/>')}

			{renderMonorail(s.div48, '52057')}
			{renderMonorail(s.div49, '51779')}
			{renderMonorail(s.div50, '51691')}

			<div className={[s.div51, s.t, telegaAnimClass === 'test' ? s.test : (telegaAnimClass === 'test2' ? s.test2 : '')].join(' ')}>
				<Telega {...rp} data={isDataset} />
			</div>

			{renderHoist(s.div52, '52045', '2H55<br><span>№11917<span/>')}
			{renderHoist(s.div53, '51800', 'ФП27П<br><span>№052232<span/>')}
			{renderHoist(s.div54, '51880', 'SM2414<br><span>№52800<span/>')}
			{renderHoist(s.div55, '51879', 'K0501<br><span>№052150<span/>')}

			<div className={[s.div56, s.cart].join(' ')} data-carts='cart'> Телега</div>

			{renderHoist(s.div57, '52046', 'K0501<br><span>№051855<span/>')}

			{renderMonorail(s.div58, '51763')}
			{renderMonorail(s.div59, '51690')}

			{/* Controls */}
			<input
				value={searchText}
				type='text'
				className={s.inp}
				onChange={e => setSearchText(e.target.value)}
			/>
			<button className={s.btn} onClick={toggleSearchMode}>
				Жми
			</button>
			<h3 className={s.h3}>Малярка</h3>

			{renderHoist(s.div60, '52805', 'тел возле крана', '', s.mal)}
			{renderHoist(s.div61, '52806', 'комната строполей', '', s.mal)}
			{renderHoist(s.div62, '52019', 'выход с к', '', s.mal)}
			{renderHoist(s.div63, '52020', 'погрузка телеги', '', s.mal)}
		</div>
	)
}
export default Telphers
