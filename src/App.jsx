import { Routes, Route } from 'react-router-dom'
import './App.css'
import Employees from './Components/Employees'

import Layout from './Components/Layout'
// import Main from './Components/Main'
// import OneComponent from './Components/OneComponent'
import Homepage from './Components/Homepage'
import First from './Components/First'
import Substation from './Components/Substation'
import MachineTools from './Components/machine/machineTools'
import Avm2 from './Components/sbbstationComponents/Avm2'
import Log from './Components/sbbstationComponents/Log'
import TpLog from './Components/sbbstationComponents/TpLog'
import SinglTp from './Components/sbbstationComponents/SinglTp'
import Train from './Components/sbbstationComponents/train/Train'
import Radialka from './Components/machine/Radialka'
import Foto from './Components/machine/Foto'
import Mashine from './Components/machine/Mashine'
import Duty from './Components/home/Duty'
import District23 from './Components/District23/District23'
import Gate from './Components/District23/Gate/Gate'
import Gates9 from './Components/District23/Gate/Gates9'
import Info from './Components/District23/Gate/Info'
import CircuitGate from './Components/District23/CircuitGate'
import PlumbersDuty from './css/homeComponent/Plambers/PlumbersDuty'
import Phones from './Components/home/phones/Phones'
import Cranes from './Components/Cranes/Cranes'

import Telphers from './Components/Telphers'
import Rp from './Components/Rp/Rp'
import DiscrabeRp from './Components/Rp/DiscrabeRp'
import Engine from './Components/machine/Engine'
import ShowCrane from './Components/Cranes/ShowCranes/ShowCrane'
import Slider from './Components/Cranes/ShowCranes/Slider'
import Painting from './Components/Painting/Painting'
import Crons from './Components/Painting/Crons'
import Aton from './Components/Painting/Aton'
import Conveyor from './Conveyor'
import sb_972 from './Components/machine/SB_972/Sb_972'
import Sb_972 from './Components/machine/SB_972/Sb_972'
import GasDuty from './Components/home/gasDuty/GasDuty'
import RepairTel from './sliceReduce/Telphers/RepairTel'
import InfoTel from './sliceReduce/Telphers/InfoTel'
import Atons from './Components/Painting/Aton/Atons'
import Pumps from './Components/Painting/Pumps'
import BackPage from './Components/BackPage/BackPage'
import SliderAll from './Components/SliderAll/SliderAll'
import CranesAll from './Components/Cranes/CranesAll'
import ChildCrane from './Components/Cranes/ChildCrane'
import RegCrane from './Components/Cranes/RegCrane'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='avm' element={<Avm2 />} />
					<Route path='log' element={<Log />} />
					<Route index element={<Homepage />} />
					<Route path='workers' element={<Employees />} />
					<Route path='machineTools' element={<MachineTools />} />
					{/* <Route path='/main' element={<Main/>}/> */}
					<Route path='telphers' element={<Telphers />} />
					<Route path='district23' element={<District23 />} />
					<Route path='substation' element={<Substation />} />
					<Route path='tpLog' element={<TpLog />} />
					<Route path='tpLog/:id' element={<SinglTp />} />
					<Route path='train' element={<Train />} />
					<Route path='radialka' element={<Radialka />} />
					<Route path='foto' element={<Foto />} />
					<Route path='mashine' element={<Mashine />} />
					<Route path='duty' element={<Duty />} />
					<Route path='gate' element={<Gate />} />
					<Route path='gates' element={<Gates9 />} />
					<Route path='info' element={<Info />} />
					<Route path='circuitGate' element={<CircuitGate />} />
					<Route path='PlumbersDuty' element={<PlumbersDuty />} />
					<Route path='phones' element={<Phones />} />
					<Route path='cranes' element={<Cranes />} />
					<Route path='/show' element={<ShowCrane />} />
					<Route path='/engine/:cosFStr' element={<Engine />} />
					<Route path='rp' element={<Rp />} />
					<Route path='/discrabeRp/:rp' element={<DiscrabeRp />} />
					<Route path='slider' element={<Slider />} />
					<Route path='Painting' element={<Painting />} />
					<Route path='krons' element={<Crons />} />
					<Route path='aton' element={<Aton />} />
					<Route path='conveyor' element={<Conveyor />} />
					<Route path='sb972' element={<Sb_972 />} />
					<Route path='sb972' element={<GasDuty />} />
					<Route path='repairTel' element={<RepairTel />} />
					<Route path='infoTel' element={<InfoTel />} />
					<Route path='atons/:id' element={<Atons />} />
					<Route path='pumps' element={<Pumps />} />
					<Route path='sliderAll' element={<SliderAll />} />
					<Route path='cranesAll' element={<CranesAll />} />
					<Route path='childCrane' element={<ChildCrane />} />
					<Route path='regCrane' element={<RegCrane />} />
					{/* <Route path='pumps' element={<BackPage />} /> */}
				</Route>
			</Routes>
		</div>
	)
}

export default App
