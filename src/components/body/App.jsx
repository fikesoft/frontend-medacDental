import React from 'react'
import { Routes, Route,useLocation} from 'react-router-dom';

//Import components
import Navbar from '../header/Navbar.jsx'
import Home from './section/Home.jsx'
import Booking from './section/Booking.jsx';
import  Appointment  from './section/Appointment.jsx';
import Footer from '../footer/Footer.jsx';
//Import styling 
import '../../css/body/app.scss' 
export const App = () => {
  const location = useLocation();
  return (
    <div className='container-fluid'>
      <Navbar/>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/appointment' element={<Appointment/>}/>

        </Routes>

        {location.pathname === '/' && <Footer />}
    </div>
  )
}
