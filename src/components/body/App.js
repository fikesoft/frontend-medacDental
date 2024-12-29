import React from 'react'
import { Routes, Route} from 'react-router-dom';

//Import components
import Navbar from '../header/Navbar.js'
import Home from './section/Home.jsx'
import Booking from './section/Booking.jsx';
import  Appointment  from './section/Appointment.jsx';
//Import styling 
import '../../css/body/app.scss' 
export const App = () => {
  return (
    <div className='container-fluid'>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/appointment' element={<Appointment/>}/>

      </Routes>
    </div>
  )
}
