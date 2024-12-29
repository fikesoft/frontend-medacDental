import React from 'react';
//Import component 
import BookingInfo from './BookingInfo';
//Import icon
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
//Import map
import MapSrc from '../../../img/map.png';
import { TextField, Button } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

//Importing styling
import '../../../css/body/booking-page/booking.scss'

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    phone: '',
    dateTime: null,
    message: '',
    id: '', 
  });
  
  const [errors, setErrors] = useState({}); // Track errors for each field
  
  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
  
      // Dynamically generate `id` based on phone and first name
      if (updatedData.firstName && updatedData.phone) {
        updatedData.id =
          updatedData.phone.slice(0, 5) + updatedData.firstName.slice(0, 4).toUpperCase();
      }
  
      return updatedData;
    });
  };
  
  const handleDateChange = (newDate) => {
    if (newDate && newDate.isBefore(new Date())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateTime: 'The selected date and time cannot be in the past.',
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        dateTime: newDate,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateTime: '', 
      }));
    }
  };
  
  // Validation form
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z]{3,}$/; 
  
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'First name must contain only letters and be at least 3 characters long';
    }
  
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only letters and be at least 3 characters long';
    }
  
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
  
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits';
    }
  
    if (!formData.dateTime) {
      newErrors.dateTime = 'Date and time are required';
    }
  
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      alert('Please fix the errors in the form before submitting.');
      return; // Stop submission if the form is invalid
    }
  
    console.log('Form submitted:', formData);
    const existingSubmissions = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedSubmissions = [...existingSubmissions, formData];
    localStorage.setItem('formData',JSON.stringify(updatedSubmissions));
    alert('Form succesfully saved and proccesed!')
    // Reset form and errors
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',               
      dateTime: null,
      message: '',
      id: '', // Reset id as well
    });
    setErrors({});
  };
  
  return (
    <div className='booking'> 

      <div className='booking-title-container'>
        <h1 className='booking-title'>Get In Touch</h1>
        <p className='booking-subtile'>Book an Appointment to treat your teeth right now.</p>
      </div>

      <div className='booking-actions'>
        <div className='booking-info'>
            <div className='location'>
                <img src={MapSrc} alt='Map'></img>
            </div>
            <div className='booking-info-cards'>
                <BookingInfo Icon={AccessTimeIcon } Title={'Office Timings'} Subtitle={'Monday - Saturday (9:00am to 5pm) Sunday (Closed)'}/>
                <BookingInfo Icon={FmdGoodOutlinedIcon} Title={'Emai Address'} Subtitle={'Smile01@gmail.com'}/>
                <BookingInfo Icon={LocalPhoneOutlinedIcon} Title={'Phone Number'} Subtitle={'0900-78601'}/>
                <BookingInfo Icon={QuestionAnswerOutlinedIcon} Title={'Live chat'} Subtitle={'+1-2064512559'}/>

            </div>
        </div>
        {/*Form ---------- with material ui */}
        
        <form className='form-book' onSubmit={handleSubmit}>
        <div className='form-group'>
          {/* First Name */}
          <div className='input-row'>
              <div className='input-container'>
                <label htmlFor='first-name'>First name</label>
                <TextField
                  id='first-name'
                  name='firstName'
                  placeholder='First name'
                  variant='outlined'
                  value={formData.firstName}
                  onChange={handleChange}
                  margin='normal'
                  className="custom-textfield"
                  error={!!errors.firstName} // Show red outline if there's an error
                  helperText={errors.firstName} // Display error message
                />
              </div>

              {/* Last Name */}
              <div className='input-container'>
                <label htmlFor='last-name'>Last name</label>
                <TextField
                  id='last-name'
                  name='lastName'
                  placeholder='Last name'
                  variant='outlined'
                  value={formData.lastName}
                  onChange={handleChange}
                  margin='normal'
                  className="custom-textfield"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
            </div>

          {/* Email */}
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <TextField
              id='email'
              name='email'
              placeholder='you@company.com'
              variant='outlined'
              fullWidth
              value={formData.email}
              onChange={handleChange}
              margin='normal'
              className="custom-textfield"
              error={!!errors.email}
              helperText={errors.email}
            />
          </div>

          {/* Phone */}
          <div className='input-container'>
            <label htmlFor='phone'>Phone number</label>
            <TextField
              id='phone'
              name='phone'
              placeholder='+1 (555) 000-0000'
              variant='outlined'
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              margin='normal'
              className="custom-textfield"
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </div>

          {/* Date & Time */}
          <div className='input-container'>
            <label htmlFor='dateTime'>Select date and time</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={formData.dateTime}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    margin='normal'
                    error={!!errors.dateTime}
                    helperText={errors.dateTime}
                  />
                )}
              />
            </LocalizationProvider>
          </div>

          {/* Message */}
          <div className='input-container'>
            <label htmlFor='message'>Message</label>
            <TextField
              id='message'
              name='message'
              placeholder='Write your message here'
              multiline
              rows={5}
              variant='outlined'
              fullWidth
              value={formData.message}
              onChange={handleChange}
              margin='normal'
              className="custom-textfield"
              error={!!errors.message}
              helperText={errors.message}
            />
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            className='submit-booking'
          >
            Book an appointment
          </Button>
        </div>
    </form>

      </div>

    </div>
  );
};

export default Booking;
