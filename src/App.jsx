import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import './App.css'
import Employees from './Components/Employees'
 import Cranes from './Components/Сranes'

import Layout from './Components/Layout'
// import Main from './Components/Main'
// import OneComponent from './Components/OneComponent'
import  Homepage  from './Components/Homepage'
import First from './Components/First'
import Substation from './Components/Substation'
import MachineTools from './Components/machine/machineTools'
import Avm2 from './Components/sbbstationComponents/Avm2'
import Log from './Components/sbbstationComponents/Log'
// import First from './Components/First'
// import OneComponent from './Components/OneComponent'

function App() {


  return (
    <div >
<Routes>
<Route  path='/' element={<Layout/>} >

 <Route path='avm' element={<Avm2/>}  />
 <Route path='log' element={<Log/>}  />
<Route index element={<Homepage />} />
<Route path='workers' element={<Employees/>} />
<Route path='machineTools' element={<MachineTools/>}/>
{/* <Route path='/main' element={<Main/>}/> */}
<Route path='m' element={<Cranes/>}/>
<Route path='substation' element={<Substation  />}/>
</Route>


</Routes>


   </div>
  )
}

export default App
