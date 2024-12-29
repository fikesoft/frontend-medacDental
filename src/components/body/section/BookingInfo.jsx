import React from 'react'
//Import styling
import '../../../css/body/booking-page/booking.scss'
export const BookingInfo = ({Icon,Title,Subtitle}) => {
  return (
<div className='office-timing'>
    <div className='icon-container'>
        <Icon className='icon'/>
    </div>
    <div className='office-timing-info'>
        <p className='office-timing-title'>
            {Title}
        </p>
        <p className='office-timing-subtitle'>
            {Subtitle}
        </p>
    </div>
</div>
  )
}
export default BookingInfo;
