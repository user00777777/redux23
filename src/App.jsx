import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import './App.css'
import Employees from './Components/Employees'
 import Cranes from './Components/Сranes'

import Layout from './Components/Layout'
// import Main from './Components/Main'
// import OneComponent from './Components/OneComponent'
import  Homepage  from './Components/Homepage'
import OneComponent from './Components/OneComponent'
import First from './Components/First'
// import First from './Components/First'
// import OneComponent from './Components/OneComponent'

function App() {


  return (
    <div >
<Routes>
<Route  path='/' element={<Layout/>} >
<Route index element={<Homepage />} />
<Route path='workers' element={<Employees/>} />
<Route path='one' element={<OneComponent/>}/>
{/* <Route path='/main' element={<Main/>}/> */}
<Route path='m' element={<Cranes/>}/>
<Route path='first' element={<First  />}/>
</Route>


</Routes>


   </div>
  )
}

export default App
