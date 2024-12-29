import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Import static 
import logo from '../../img/logo.png'
import iconBurger from '../../img/iconBurgher.svg'
//Import styling
import '../../css/header/header.scss'

export const Navbar = () => {
  const [slideMenuOpen, setSlideMenuOpen ] =  useState(false)

  const toggleSlideMenuOpen =()=>{
    setSlideMenuOpen(!slideMenuOpen);
  }
  const navigate = useNavigate();

  return (
    <header>
      
      <nav className='nav-bar'>

        <img src={logo} alt='MEDENT' className='logo-img'  onClick={()=>{navigate('/')}}></img>

        <button className='burgher-menu' onClick={toggleSlideMenuOpen} ><img src={iconBurger} alt='icon'></img></button>    

        <div className={`slide-menu ${slideMenuOpen ? 'open' : ''}`}>

          <ul className='nav-bar-menu'>

            <li className='nav-bar-item' onClick={()=>{navigate('/')}} > Home  </li>
            <li className='nav-bar-item' onClick={()=>{navigate('/appointment')}} > Appointments  </li>          
            <li className='nav-bar-item'> Blogs </li>          
            <li className='nav-bar-item'> About  </li>          
            <li className='nav-bar-item'> Contact  </li>          

          </ul>
          
          <button className='button-book-now' onClick={()=>{navigate('/booking')}}>Book Now</button>
        </div>

      </nav>

    </header>
  )
}

export default Navbar
