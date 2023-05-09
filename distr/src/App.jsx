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
// import First from './Components/First'
// import OneComponent from './Components/OneComponent'

function App() {


  return (
    <div >
<Routes>
<Route  path='/' element={<Layout/>} >
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
