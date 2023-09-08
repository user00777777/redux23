import { useState } from 'react'
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
import ShowCrane from './Components/Cranes/ShowCrane'
// import First from './Components/First'
// import OneComponent from './Components/OneComponent'

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
					<Route path='m' element={<Cranes />} />
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
					<Route path='/showCrane' element={<ShowCrane />} />

					<Route path='cran' element={<Cranes />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
