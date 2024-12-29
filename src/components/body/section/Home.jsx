import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styling
import '../../../css/body/home-section/home-section.scss';
import '../../../css/global.scss'
//Import icon && photos
import iconPhone from '../../../img/IconPhone.svg'
import drawing from '../../../img/highLightTitle.svg'
import doctorPhoto from    '../../../img/doctor.png'
import iconLinkdin from '../../../img/linkdin.svg'
import mainHero from '../../../img/hero.png' 
import teeth from '../../../img/teeth.svg'
export const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='home'>

      <div className='home-heading'>

        <div className='home-heading-title'>
          <h1 className='home-title'>Get Ready For Your Best Ever Dental Experience!</h1>
          <span className='home-drawing'><img src={drawing} alt='drawing'></img></span>
        </div>

        <div className='home-heading-subtitle'>
          <p className='home-subtitle'>
            We use only the best quality materials on the market in order to provide the best products to our patients,
            So don't worry about anything and book yourself.
          </p>
        </div>

        <div className='home-heading-actions'>
          <button className='home-button-book-appointment' onClick={()=>{navigate('/booking')}}>Book an appointment</button>
          
          <div className='home-call-us'>
            {/*Icon border and icon gradient */}
            <div className='home-icon-call'>
             
              <div className='rectangle-gradient'>

                <img src={iconPhone} alt='phone'></img>

              </div>
             
            </div>

            <div className='home-call-info'>
              <p className='home-call-info-title'>
                Dental 24H Emergency
              </p>
              <p className='home-call-info-number'>0900-78601</p>
            </div>

          </div>

        </div>
        
        <div className='recomendation'>
          {/*Header----------------------------------------- */}
          <div className='recomendation-header'>

            <div className='doctor'>
              <img src={doctorPhoto} alt='doctor'></img>
                <div className='doctor-info'>
                  <p className='doctor-name'>Thomas daniel</p>
                  <p className='doctor-surname'>Sr Dental</p>
                </div>

            </div>
            
            <img src={iconLinkdin} alt='linkdin' className='icon-linkdin'></img>

          </div>
          {/*Recomendation------------------------------------------ */}
          <p className='recomendation-text'>
          Top Quailty dental treatment done by field experts, Highly Recommended for everyone
          </p>
        </div>

      </div>

      <div className='home-hero-heading'>      
        <div className="rotatingBorder">
          <svg>
            <circle cx="50%" cy="50%" r="280"></circle>
          </svg>

          <div className="firstBiggerCircle">
            <div className="secondSmallCircle">
              <svg>
                <circle cx="50%" cy="50%" r="220"></circle>
              </svg>
            </div>
          </div>
          
          {/* Small Circles Container */}
          <div className="smallCirclesContainer">
            <div className="smallCircle" style={{ transform: 'rotate(30deg) translate(285px) rotate(-30deg)' }}>
              <img src={teeth} alt="Teeth Icon" />
            </div>
            <div className="smallCircle" style={{ transform: 'rotate(120deg) translate(285px) rotate(-120deg)' }}>
              <img src={teeth} alt="Teeth Icon" />
            </div>
            <div className="smallCircle" style={{ transform: 'rotate(210deg) translate(285px) rotate(-210deg)' }}>
              <img src={teeth} alt="Teeth Icon" />
            </div>
          </div>
        </div>
        
      <img src={mainHero} alt="Hero" className="centerImage" /> 
     </div>

      
    </section>
  );
}

export default Home;
